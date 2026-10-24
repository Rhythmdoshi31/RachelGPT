
import { randomUUID } from "node:crypto";
import type { Response } from "express";
import type { AuthenticatedRequest } from "../middleware/auth.js";
import { prisma } from "../lib/prisma.js";
import { processWardrobePresentationBatch } from "../services/wardrobePresentation.processor.js";

const LOG_PREFIX = "[WardrobePresentation]";
const STALE_JOB_MS = 10 * 60 * 1000;

interface ClaimedPresentationItem {
  id: string;
  userId: string;
  primaryImagePath: string;
  presentationJobToken: string;
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

export async function generateWardrobePresentations(
  req: AuthenticatedRequest,
  res: Response,
) {
  const startedAt = Date.now();

  try {
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    const { wardrobeItemIds } = req.body;

    if (
      !Array.isArray(wardrobeItemIds) ||
      wardrobeItemIds.length === 0 ||
      wardrobeItemIds.length > 50 ||
      wardrobeItemIds.some(
        (id: unknown) => typeof id !== "string" || !id.trim(),
      )
    ) {
      return res.status(400).json({
        success: false,
        message: "wardrobeItemIds must contain between 1 and 50 valid IDs",
      });
    }

    const uniqueIds = [...new Set<string>(wardrobeItemIds)];

    if (uniqueIds.length !== wardrobeItemIds.length) {
      return res.status(400).json({
        success: false,
        message: "Duplicate wardrobeItemIds are not allowed",
      });
    }

    const items = await prisma.wardrobeItem.findMany({
      where: {
        id: { in: uniqueIds },
        userId,
        isArchived: false,
      },
      select: {
        id: true,
        userId: true,
        primaryImagePath: true,
        presentationImageStatus: true,
        presentationProcessingStartedAt: true,
      },
    });

    if (items.length !== uniqueIds.length) {
      return res.status(404).json({
        success: false,
        message: "One or more wardrobe items were not found",
      });
    }

    const missingImages = items.filter((item) => !item.primaryImagePath);

    if (missingImages.length > 0) {
      return res.status(400).json({
        success: false,
        message: "One or more wardrobe items have no original image",
        wardrobeItemIds: missingImages.map((item) => item.id),
      });
    }

    const now = Date.now();
    const claimedItems: ClaimedPresentationItem[] = [];
    const skipped: Array<{
      wardrobeItemId: string;
      presentationImageStatus: string;
    }> = [];

    for (const item of items) {
      const isStale =
        item.presentationImageStatus === "processing" &&
        (!item.presentationProcessingStartedAt ||
          now - item.presentationProcessingStartedAt.getTime() >
            STALE_JOB_MS);

      const eligible =
        item.presentationImageStatus === "pending" ||
        item.presentationImageStatus === "failed" ||
        isStale;

      if (!eligible) {
        skipped.push({
          wardrobeItemId: item.id,
          presentationImageStatus: item.presentationImageStatus,
        });
        continue;
      }

      const token = randomUUID();
      const staleBefore = new Date(now - STALE_JOB_MS);

      // Conditional update prevents two requests from claiming the same
      // pending/failed item. A stale processing job can be reclaimed only
      // if its timestamp is still stale at the moment of the update.
      const claimResult = await prisma.wardrobeItem.updateMany({
        where: {
          id: item.id,
          userId,
          isArchived: false,
          ...(isStale
            ? {
                presentationImageStatus: "processing",
                OR: [
                  { presentationProcessingStartedAt: null },
                  { presentationProcessingStartedAt: { lt: staleBefore } },
                ],
              }
            : {
                presentationImageStatus: item.presentationImageStatus,
              }),
        },
        data: {
          presentationImageStatus: "processing",
          presentationImageError: null,
          presentationJobToken: token,
          presentationProcessingStartedAt: new Date(),
        },
      });

      if (claimResult.count !== 1) {
        skipped.push({
          wardrobeItemId: item.id,
          presentationImageStatus: "processing",
        });
        continue;
      }

      claimedItems.push({
        id: item.id,
        userId: item.userId,
        primaryImagePath: item.primaryImagePath!,
        presentationJobToken: token,
      });
    }

    if (claimedItems.length > 0) {
      console.info(`${LOG_PREFIX} Batch queued`, {
        count: claimedItems.length,
      });

      // Do not await background processing in the HTTP request.
      void processWardrobePresentationBatch(claimedItems).catch(
        async (error: unknown) => {
          console.error(`${LOG_PREFIX} Unexpected batch failure`, {
            error: errorMessage(error),
          });

          // Only fail jobs still owned by this batch.
          await Promise.allSettled(
            claimedItems.map((item) =>
              prisma.wardrobeItem.updateMany({
                where: {
                  id: item.id,
                  userId: item.userId,
                  presentationImageStatus: "processing",
                  presentationJobToken: item.presentationJobToken,
                },
                data: {
                  presentationImageStatus: "failed",
                  presentationImageError:
                    "Presentation generation stopped unexpectedly.",
                  presentationJobToken: null,
                  presentationProcessingStartedAt: null,
                },
              }),
            ),
          );
        },
      );
    }

    console.info(`${LOG_PREFIX} Request handled`, {
      requested: uniqueIds.length,
      queued: claimedItems.length,
      skipped: skipped.length,
      durationMs: Date.now() - startedAt,
    });

    return res.status(claimedItems.length > 0 ? 202 : 200).json({
      success: true,
      message:
        claimedItems.length > 0
          ? "Presentation generation started"
          : "No items need presentation generation",
      queued: claimedItems.length,
      skipped,
    });
  } catch (error) {
    console.error(`${LOG_PREFIX} Controller failed`, {
      error: errorMessage(error),
    });

    return res.status(500).json({
      success: false,
      message: "Failed to start presentation generation",
    });
  }
}
