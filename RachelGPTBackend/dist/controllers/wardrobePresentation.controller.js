import { prisma } from "../lib/prisma.js";
import { processWardrobePresentationBatch } from "../services/wardrobePresentation.processor.js";
const LOG_PREFIX = "[WardrobePresentation]";
export async function generateWardrobePresentations(req, res) {
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
        if (!Array.isArray(wardrobeItemIds) ||
            wardrobeItemIds.length === 0 ||
            wardrobeItemIds.length > 50 ||
            wardrobeItemIds.some((id) => typeof id !== "string" || !id.trim())) {
            return res.status(400).json({
                success: false,
                message: "wardrobeItemIds must contain between 1 and 50 valid IDs",
            });
        }
        const uniqueIds = [...new Set(wardrobeItemIds)];
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
        const eligibleItems = items.filter((item) => item.presentationImageStatus === "pending" ||
            item.presentationImageStatus === "failed");
        const skipped = items
            .filter((item) => !eligibleItems.includes(item))
            .map((item) => ({
            wardrobeItemId: item.id,
            presentationImageStatus: item.presentationImageStatus,
        }));
        const claimedItems = [];
        for (const item of eligibleItems) {
            const result = await prisma.wardrobeItem.updateMany({
                where: {
                    id: item.id,
                    userId,
                    isArchived: false,
                    presentationImageStatus: item.presentationImageStatus,
                },
                data: {
                    presentationImageStatus: "processing",
                    presentationImageError: null,
                },
            });
            if (result.count === 1) {
                claimedItems.push(item);
            }
        }
        if (claimedItems.length > 0) {
            const processorItems = claimedItems.map((item) => ({
                id: item.id,
                userId: item.userId,
                primaryImagePath: item.primaryImagePath,
            }));
            console.info(`${LOG_PREFIX} Batch queued`, {
                count: processorItems.length,
            });
            // Background work is intentionally not awaited by the HTTP request.
            void processWardrobePresentationBatch(processorItems).catch(async (error) => {
                console.error(`${LOG_PREFIX} Unexpected batch failure`, error);
                try {
                    await prisma.wardrobeItem.updateMany({
                        where: {
                            id: { in: processorItems.map((item) => item.id) },
                            userId,
                            presentationImageStatus: "processing",
                        },
                        data: {
                            presentationImageStatus: "failed",
                            presentationImageError: "Presentation generation stopped unexpectedly.",
                        },
                    });
                }
                catch (updateError) {
                    console.error(`${LOG_PREFIX} Could not recover failed batch statuses`, updateError);
                }
            });
        }
        console.info(`${LOG_PREFIX} Batch request handled`, {
            requested: uniqueIds.length,
            eligible: eligibleItems.length,
            queued: claimedItems.length,
            skipped: skipped.length + eligibleItems.length - claimedItems.length,
            durationMs: Date.now() - startedAt,
        });
        const responseBody = {
            success: true,
            message: claimedItems.length > 0
                ? "Presentation generation started"
                : "No items need presentation generation",
            queued: claimedItems.length,
            skipped: [
                ...skipped,
                ...eligibleItems
                    .filter((item) => !claimedItems.includes(item))
                    .map((item) => ({
                    wardrobeItemId: item.id,
                    presentationImageStatus: "processing",
                })),
            ],
        };
        return res
            .status(claimedItems.length > 0 ? 202 : 200)
            .json(responseBody);
    }
    catch (error) {
        console.error(`${LOG_PREFIX} Controller failed`, error);
        return res.status(500).json({
            success: false,
            message: "Failed to start presentation generation",
        });
    }
}
//# sourceMappingURL=wardrobePresentation.controller.js.map