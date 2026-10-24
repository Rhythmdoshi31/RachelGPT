
import path from "node:path";
import { prisma } from "../lib/prisma.js";
import { supabaseAdmin } from "../lib/supabaseAdmin.js";
import { generateWardrobePresentationImage } from "./wardrobePresentation.service.js";

interface PresentationItem {
  id: string;
  userId: string;
  primaryImagePath: string;
}

const BUCKET = "Wardrobe";
const CONCURRENCY = 2;
const MAX_ATTEMPTS = 3;

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

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function elapsedMs(start: number): number {
  return Date.now() - start;
}

function logItem(
  itemId: string,
  message: string,
  details?: Record<string, unknown>,
): void {
  console.info(
    `[WardrobePresentation][${itemId}] ${message}`,
    details ?? {},
  );
}

function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

function isRetryableError(error: unknown): boolean {
  const message = getErrorMessage(error);

  // Quota and billing errors should not be retried automatically.
  if (/RESOURCE_EXHAUSTED|quota|billing|429/i.test(message)) {
    return false;
  }

  return /500|502|503|504|UNAVAILABLE|INTERNAL|timeout|fetch failed|ECONNRESET|ETIMEDOUT/i.test(
    message,
  );
}

async function downloadStorageImage(
  storagePath: string,
): Promise<Buffer> {
  const { data, error } = await supabaseAdmin.storage
    .from(BUCKET)
    .download(storagePath);

  if (error || !data) {
    throw new Error(
      `Failed to download ${storagePath}: ${
        error?.message ?? "No file data"
      }`,
    );
  }

  return Buffer.from(await data.arrayBuffer());
}

async function markFailed(
  item: PresentationItem,
  error: unknown,
): Promise<void> {
  const message = getErrorMessage(error).slice(0, 1000);

  try {
    const result = await prisma.wardrobeItem.updateMany({
      where: {
        id: item.id,
        userId: item.userId,
        presentationImageStatus: "processing",
      },
      data: {
        presentationImageStatus: "failed",
        presentationImageError: message,
      },
    });

    if (result.count === 1) {
      logItem(item.id, "Failed", { error: message });
    } else {
      logItem(item.id, "Failure status not changed; item is no longer processing");
    }
  } catch (updateError) {
    console.error(
      `[WardrobePresentation][${item.id}] Could not save failure status:`,
      updateError,
    );
  }
}

async function processOnePresentation(
  item: PresentationItem,
): Promise<void> {
  const itemStart = Date.now();
  const outputPath = `${item.userId}/${item.id}/presentation.png`;

  logItem(item.id, "Generation started");

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    const attemptStart = Date.now();

    try {
      // Avoid expensive work if the item is no longer eligible.
      const currentItem = await prisma.wardrobeItem.findFirst({
        where: {
          id: item.id,
          userId: item.userId,
          isArchived: false,
        },
        select: {
          presentationImageStatus: true,
        },
      });

      if (
        !currentItem ||
        currentItem.presentationImageStatus !== "processing"
      ) {
        logItem(item.id, "Job skipped; item is no longer processing");
        return;
      }

      const [originalBuffer, backgroundBuffer] = await Promise.all([
        downloadStorageImage(item.primaryImagePath),
        downloadStorageImage(BACKGROUND_PATH),
      ]);

      const generatedBuffer = await generateWardrobePresentationImage(
        originalBuffer,
        getMimeType(item.primaryImagePath),
        backgroundBuffer,
        getMimeType(BACKGROUND_PATH),
      );

      if (!generatedBuffer.length) {
        throw new Error("Generated presentation image is empty");
      }

      // Upload only after checking that the item is still processing.
      // A claim token is still needed to fully protect against stale workers.
      const latestItem = await prisma.wardrobeItem.findFirst({
        where: {
          id: item.id,
          userId: item.userId,
          isArchived: false,
        },
        select: {
          presentationImageStatus: true,
        },
      });

      if (
        !latestItem ||
        latestItem.presentationImageStatus !== "processing"
      ) {
        logItem(item.id, "Upload skipped; item is no longer processing");
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
          `Failed to upload presentation image: ${uploadError.message}`,
        );
      }

      const updated = await prisma.wardrobeItem.updateMany({
        where: {
          id: item.id,
          userId: item.userId,
          isArchived: false,
          presentationImageStatus: "processing",
        },
        data: {
          presentationImagePath: outputPath,
          presentationImageStatus: "completed",
          presentationImageError: null,
        },
      });

      if (updated.count === 0) {
        logItem(
          item.id,
          "Image uploaded but completion skipped; item is no longer processing",
        );
        return;
      }

      logItem(item.id, "Completed", {
        attempt,
        durationMs: elapsedMs(itemStart),
      });

      return;
    } catch (error) {
      const retryable = isRetryableError(error);

      console.error(`[WardrobePresentation][${item.id}] Attempt failed`, {
        attempt,
        durationMs: elapsedMs(attemptStart),
        retryable,
        error: getErrorMessage(error),
      });

      if (attempt < MAX_ATTEMPTS && retryable) {
        const delayMs = 1000 * 2 ** (attempt - 1);

        // Retry only transient failures. Quota/billing failures are excluded.
        await sleep(delayMs);
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
  const batchStart = Date.now();

  if (items.length === 0) {
    return;
  }

  console.info("[WardrobePresentation] Batch started", {
    count: items.length,
    concurrency: CONCURRENCY,
  });

  let currentIndex = 0;

  async function worker(): Promise<void> {
    while (true) {
      const index = currentIndex++;

      if (index >= items.length) {
        return;
      }

      const item = items[index];

      try {
        await processOnePresentation(item);
      } catch (error) {
        console.error(
          `[WardrobePresentation][${item.id}] Unexpected worker failure:`,
          error,
        );

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

  console.info("[WardrobePresentation] Batch finished", {
    count: items.length,
    durationMs: elapsedMs(batchStart),
  });
}
