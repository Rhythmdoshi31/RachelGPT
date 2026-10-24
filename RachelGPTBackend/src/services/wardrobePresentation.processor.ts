
import path from "node:path";
import { prisma } from "../lib/prisma.js";
import { supabaseAdmin } from "../lib/supabaseAdmin.js";
import { generateWardrobePresentationImage } from "./wardrobePresentation.service.js";

interface PresentationItem {
  id: string;
  userId: string;
  primaryImagePath: string;
  presentationJobToken: string;
}

const LOG_PREFIX = "[WardrobePresentation]";
const BUCKET = "Wardrobe";
const CONCURRENCY = 2;
const MAX_ATTEMPTS = 2;

const backgroundPathFromEnv = process.env.WARDROBE_BACKGROUND_PATH;

if (!backgroundPathFromEnv) {
  throw new Error("WARDROBE_BACKGROUND_PATH is missing from .env");
}

const BACKGROUND_PATH = backgroundPathFromEnv;

function getMimeType(storagePath: string): string {
  switch (path.extname(storagePath).toLowerCase()) {
    case ".png":
      return "image/png";
    case ".webp":
      return "image/webp";
    case ".heic":
      return "image/heic";
    case ".heif":
      return "image/heif";
    default:
      return "image/jpeg";
  }
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

function isRetryableError(error: unknown): boolean {
  const message = errorMessage(error);

  // Never retry quota, billing, authentication, or permission errors.
  if (
    /RESOURCE_EXHAUSTED|quota|billing|429|401|403|API_KEY_INVALID|PERMISSION_DENIED/i.test(
      message,
    )
  ) {
    return false;
  }

  return /500|502|503|504|UNAVAILABLE|INTERNAL|timeout|fetch failed|ECONNRESET|ETIMEDOUT/i.test(
    message,
  );
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function downloadStorageImage(storagePath: string): Promise<Buffer> {
  const { data, error } = await supabaseAdmin.storage
    .from(BUCKET)
    .download(storagePath);

  if (error || !data) {
    throw new Error(
      `Storage download failed: ${error?.message ?? "No file data"}`,
    );
  }

  const buffer = Buffer.from(await data.arrayBuffer());

  if (buffer.length === 0) {
    throw new Error("Downloaded image is empty");
  }

  return buffer;
}

async function ownsJob(item: PresentationItem): Promise<boolean> {
  const current = await prisma.wardrobeItem.findFirst({
    where: {
      id: item.id,
      userId: item.userId,
      isArchived: false,
      presentationImageStatus: "processing",
      presentationJobToken: item.presentationJobToken,
    },
    select: { id: true },
  });

  return current !== null;
}

async function markFailed(
  item: PresentationItem,
  error: unknown,
): Promise<void> {
  const message = errorMessage(error).slice(0, 1000);

  try {
    const result = await prisma.wardrobeItem.updateMany({
      where: {
        id: item.id,
        userId: item.userId,
        isArchived: false,
        presentationImageStatus: "processing",
        presentationJobToken: item.presentationJobToken,
      },
      data: {
        presentationImageStatus: "failed",
        presentationImageError: message,
        presentationJobToken: null,
        presentationProcessingStartedAt: null,
      },
    });

    if (result.count === 1) {
      console.error(`${LOG_PREFIX} Item failed`, {
        itemId: item.id,
        error: message,
      });
    }
    // If the token no longer matches, a newer job owns the item.
  } catch (updateError) {
    console.error(`${LOG_PREFIX} Could not save failure status`, {
      itemId: item.id,
      error: errorMessage(updateError),
    });
  }
}

async function processOnePresentation(
  item: PresentationItem,
): Promise<void> {
  const startedAt = Date.now();

  // Each job writes to a different object. A stale worker therefore cannot
  // overwrite the output of a newer job.
  const outputPath =
    `${item.userId}/${item.id}/presentation-${item.presentationJobToken}.png`;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      if (!(await ownsJob(item))) {
        return;
      }

      const [originalBuffer, backgroundBuffer] = await Promise.all([
        downloadStorageImage(item.primaryImagePath),
        downloadStorageImage(BACKGROUND_PATH),
      ]);

      // Downloading can take time; verify ownership immediately before the
      // expensive generation call.
      if (!(await ownsJob(item))) {
        return;
      }

      const generatedBuffer = await generateWardrobePresentationImage(
        originalBuffer,
        getMimeType(item.primaryImagePath),
        backgroundBuffer,
        getMimeType(BACKGROUND_PATH),
      );

      if (!generatedBuffer || generatedBuffer.length === 0) {
        throw new Error("Generated presentation image is empty");
      }

      // A job may have been reclaimed while Gemini was running.
      if (!(await ownsJob(item))) {
        return;
      }

      const { error: uploadError } = await supabaseAdmin.storage
        .from(BUCKET)
        .upload(outputPath, generatedBuffer, {
          contentType: "image/png",
          upsert: true,
        });

      if (uploadError) {
        throw new Error(
          `Presentation image upload failed: ${uploadError.message}`,
        );
      }

      // The token condition is essential: a stale worker cannot mark a newer
      // job completed or change its database path.
      const completion = await prisma.wardrobeItem.updateMany({
        where: {
          id: item.id,
          userId: item.userId,
          isArchived: false,
          presentationImageStatus: "processing",
          presentationJobToken: item.presentationJobToken,
        },
        data: {
          presentationImagePath: outputPath,
          presentationImageStatus: "completed",
          presentationImageError: null,
          presentationJobToken: null,
          presentationProcessingStartedAt: null,
        },
      });

      if (completion.count !== 1) {
        // This job lost ownership after its upload. Its token-specific object
        // is intentionally not referenced by the wardrobe item.
        return;
      }

      console.info(`${LOG_PREFIX} Item completed`, {
        itemId: item.id,
        durationMs: Date.now() - startedAt,
      });

      return;
    } catch (error) {
      const retryable = isRetryableError(error);

      if (attempt < MAX_ATTEMPTS && retryable) {
        // Keep the retry count low to limit potential duplicate provider costs.
        await sleep(1000 * attempt);
        continue;
      }

      await markFailed(item, error);
      return;
    }
  }
}

export async function processWardrobePresentationBatch(
  items: PresentationItem[],
): Promise<void> {
  if (items.length === 0) {
    return;
  }

  const startedAt = Date.now();

  console.info(`${LOG_PREFIX} Batch started`, {
    count: items.length,
    concurrency: Math.min(CONCURRENCY, items.length),
  });

  let nextIndex = 0;

  async function worker(): Promise<void> {
    while (true) {
      const index = nextIndex++;

      if (index >= items.length) {
        return;
      }

      const item = items[index];

      try {
        await processOnePresentation(item);
      } catch (error) {
        // Unexpected errors are contained per item so other items can finish.
        await markFailed(item, error);
      }
    }
  }

  await Promise.all(
    Array.from(
      { length: Math.min(CONCURRENCY, items.length) },
      () => worker(),
    ),
  );

  console.info(`${LOG_PREFIX} Batch finished`, {
    count: items.length,
    durationMs: Date.now() - startedAt,
  });
}
