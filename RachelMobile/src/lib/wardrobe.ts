
import { File } from "expo-file-system";
import { getAccessToken } from "./onboarding";
import { supabase } from "./supabase";

const API_URL = process.env.EXPO_PUBLIC_API_URL;
const STORAGE_BUCKET = "Wardrobe";
const MAX_BATCH_SIZE = 50;
const UPLOAD_CONCURRENCY = 3;
const POLL_INTERVAL_MS = 2000;
const MAX_POLL_ATTEMPTS = 180;

export type WardrobeUploadFile = {
  uri: string;
  fileName: string | null;
  mimeType: string | null;
};

type UploadUrl = {
  index: number;
  wardrobeItemId: string;
  storagePath: string;
  token: string;
};

type AnalysisStatusItem = {
  id: string;
  analysisStatus:
    | "pending"
    | "processing"
    | "completed"
    | "failed"
    | "not_found";
  category?: string;
  subcategory?: string | null;
};

export type WardrobeUploadResult = {
  uploaded: number;
  failed: number;
  completed: number;
  analysisFailed: number;
  uploadedUris: string[];
};

function getApiUrl(): string {
  if (!API_URL) {
    throw new Error("Missing EXPO_PUBLIC_API_URL.");
  }

  return API_URL;
}

async function readResponse(response: Response) {
  const result = await response.json().catch(() => null);

  if (!result || typeof result !== "object") {
    throw new Error(
      `Invalid wardrobe API response (HTTP ${response.status}).`,
    );
  }

  if (!response.ok || !result.success) {
    throw new Error(
      result.message ||
        `Wardrobe request failed (HTTP ${response.status}).`,
    );
  }

  return result;
}

async function apiRequest(endpoint: string, body?: unknown) {
  const token = await getAccessToken();

  const response = await fetch(`${getApiUrl()}${endpoint}`, {
    method: body === undefined ? "GET" : "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      ...(body === undefined
        ? {}
        : { "Content-Type": "application/json" }),
    },
    ...(body === undefined
      ? {}
      : { body: JSON.stringify(body) }),
  });

  return readResponse(response);
}

function getFileDetails(photo: WardrobeUploadFile) {
  const uriName = photo.uri.split("/").pop()?.split("?")[0];
  const fileName =
    photo.fileName || uriName || `wardrobe-${Date.now()}.jpg`;

  let contentType = photo.mimeType?.toLowerCase();

  if (!contentType || !contentType.startsWith("image/")) {
    const extension = fileName.split(".").pop()?.toLowerCase();

    const mimeTypes: Record<string, string> = {
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      png: "image/png",
      webp: "image/webp",
      heic: "image/heic",
      heif: "image/heif",
    };

    contentType = mimeTypes[extension || ""] || "image/jpeg";
  }

  const allowedTypes = new Set([
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/heic",
    "image/heif",
  ]);

  if (!allowedTypes.has(contentType)) {
    throw new Error(
      `Unsupported image format for "${fileName}". Please choose a JPEG, PNG, WebP, HEIC, or HEIF image.`,
    );
  }

  return { fileName, contentType };
}

async function runWithConcurrency<T>(
  items: T[],
  concurrency: number,
  task: (item: T, index: number) => Promise<void>,
) {
  let nextIndex = 0;

  async function worker() {
    while (true) {
      const index = nextIndex++;

      if (index >= items.length) return;

      await task(items[index], index);
    }
  }

  await Promise.all(
    Array.from(
      { length: Math.min(concurrency, items.length) },
      () => worker(),
    ),
  );
}

function sleep(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

export async function uploadAndAnalyzeWardrobe(
  photos: WardrobeUploadFile[],
  onProgress?: (
    message: string,
    completed: number,
    total: number,
  ) => void,
  onSaved?: (uploadedUris: string[]) => void,
): Promise<WardrobeUploadResult> {
  if (photos.length === 0) {
    throw new Error("Please select at least one photo.");
  }

  if (photos.length > MAX_BATCH_SIZE) {
    throw new Error("You can upload up to 50 photos at a time.");
  }

  // Validate all selected file types before requesting upload URLs.
  const fileDetails = photos.map(getFileDetails);

  onProgress?.("Preparing secure uploads...", 0, photos.length);

  // 1. Request signed upload URLs from the backend.
  const urlResult = await apiRequest("/api/wardrobe/upload-urls", {
    files: fileDetails,
  });

  const uploads = urlResult.uploads as UploadUrl[];

  if (!Array.isArray(uploads) || uploads.length !== photos.length) {
    throw new Error("The server returned an unexpected upload response.");
  }

  const uploadByIndex = new Map<number, UploadUrl>(
    uploads.map((upload) => [upload.index, upload]),
  );

  for (let i = 0; i < photos.length; i++) {
    if (!uploadByIndex.has(i)) {
      throw new Error(`The upload URL for photo ${i + 1} is missing.`);
    }
  }

  // 2. Upload image bytes directly to Supabase, three at a time.
  const successfulUploads: UploadUrl[] = [];
  const failures: string[] = [];
  let finishedUploads = 0;

  await runWithConcurrency(
    photos,
    UPLOAD_CONCURRENCY,
    async (photo, index) => {
      const upload = uploadByIndex.get(index)!;
      const details = fileDetails[index];

      try {
        const file = new File(photo.uri);
        const bytes = await file.bytes();

        const body = bytes.buffer.slice(
          bytes.byteOffset,
          bytes.byteOffset + bytes.byteLength,
        ) as ArrayBuffer;

        const { error } = await supabase.storage
          .from(STORAGE_BUCKET)
          .uploadToSignedUrl(
            upload.storagePath,
            upload.token,
            body,
            {
              contentType: details.contentType,
              upsert: false,
            },
          );

        if (error) {
          throw new Error(error.message);
        }

        successfulUploads.push(upload);
      } catch (error) {
        failures.push(
          `Photo ${index + 1}: ${
            error instanceof Error ? error.message : "Upload failed"
          }`,
        );
      } finally {
        finishedUploads++;

        onProgress?.(
          `Uploading photos (${finishedUploads}/${photos.length})...`,
          finishedUploads,
          photos.length,
        );
      }
    },
  );

  if (successfulUploads.length === 0) {
    throw new Error(
      failures[0] || "None of the photos could be uploaded.",
    );
  }

  // Preserve the original selection order when associating saved URIs.
  successfulUploads.sort((a, b) => a.index - b.index);

  // 3. Create database records for successful Storage uploads.
  onProgress?.(
    "Saving your wardrobe...",
    finishedUploads,
    photos.length,
  );

  await apiRequest("/api/wardrobe/complete-batch", {
    uploads: successfulUploads.map((upload) => ({
      wardrobeItemId: upload.wardrobeItemId,
      storagePath: upload.storagePath,
    })),
  });

  // The images and their database records are now saved.
  // Notify the UI before starting or polling AI analysis.
  const uploadedUris = successfulUploads.map(
    (upload) => photos[upload.index].uri,
  );

  onSaved?.(uploadedUris);

  // 4. Start background AI analysis for saved records.
  const ids = successfulUploads.map(
    (upload) => upload.wardrobeItemId,
  );

  await apiRequest("/api/wardrobe/analyze-batch", {
    wardrobeItemIds: ids,
  });

  // 5. Poll until all saved items reach a terminal analysis state.
  let completed = 0;
  let analysisFailed = 0;

  for (let attempt = 0; attempt < MAX_POLL_ATTEMPTS; attempt++) {
    await sleep(POLL_INTERVAL_MS);

    const statusResult = await apiRequest(
      `/api/wardrobe/analysis-status?ids=${ids.join(",")}`,
    );

    const items = statusResult.items as AnalysisStatusItem[];

    if (!Array.isArray(items)) {
      throw new Error(
        "Your photos are saved, but the server returned invalid analysis statuses.",
      );
    }

    const missing = items.filter(
      (item) => item.analysisStatus === "not_found",
    );

    if (missing.length > 0) {
      throw new Error(
        `Your photos are saved, but ${missing.length} wardrobe item(s) could not be found while checking analysis status.`,
      );
    }

    completed = items.filter(
      (item) => item.analysisStatus === "completed",
    ).length;

    analysisFailed = items.filter(
      (item) => item.analysisStatus === "failed",
    ).length;

    const finished = completed + analysisFailed;

    onProgress?.(
      `Analysing your wardrobe (${finished}/${ids.length})...`,
      finished,
      ids.length,
    );

    if (finished === ids.length) {
      return {
        uploaded: successfulUploads.length,
        failed: failures.length,
        completed,
        analysisFailed,
        uploadedUris,
      };
    }
  }

  // The saved items remain saved even if analysis takes too long.
  throw new Error(
    "Your photos have been saved, but AI analysis is taking longer than expected. You can continue onboarding and check the analysis later.",
  );
}
