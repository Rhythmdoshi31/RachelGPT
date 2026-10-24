import { prisma } from "../lib/prisma.js";
import { processWardrobePresentationBatch } from "../services/wardrobePresentation.processor.js";
export async function generateWardrobePresentations(req, res) {
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
            wardrobeItemIds.some((id) => typeof id !== "string" || !id)) {
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
        const skippedItems = items
            .filter((item) => !eligibleItems.includes(item))
            .map((item) => ({
            wardrobeItemId: item.id,
            presentationImageStatus: item.presentationImageStatus,
        }));
        if (eligibleItems.length === 0) {
            return res.status(200).json({
                success: true,
                message: "No items need presentation generation",
                queued: 0,
                skipped: skippedItems,
            });
        }
        // Claim eligible items before starting background work.
        // Conditional updates prevent already-claimed items from
        // being queued again by a concurrent request.
        const claimedItems = [];
        for (const item of eligibleItems) {
            const claimed = await prisma.wardrobeItem.updateMany({
                where: {
                    id: item.id,
                    userId,
                    presentationImageStatus: item.presentationImageStatus,
                },
                data: {
                    presentationImageStatus: "processing",
                    presentationImageError: null,
                },
            });
            if (claimed.count === 1) {
                claimedItems.push(item);
            }
        }
        if (claimedItems.length > 0) {
            void processWardrobePresentationBatch(claimedItems.map((item) => ({
                id: item.id,
                userId: item.userId,
                primaryImagePath: item.primaryImagePath,
            }))).catch(async (error) => {
                console.error("Presentation batch failed unexpectedly:", error);
                try {
                    await prisma.wardrobeItem.updateMany({
                        where: {
                            id: { in: claimedItems.map((item) => item.id) },
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
                    console.error("Failed to update presentation statuses after batch failure:", updateError);
                }
            });
        }
        return res.status(202).json({
            success: true,
            message: "Presentation generation started",
            queued: claimedItems.length,
            skipped: [
                ...skippedItems,
                ...eligibleItems
                    .filter((item) => !claimedItems.includes(item))
                    .map((item) => ({
                    wardrobeItemId: item.id,
                    presentationImageStatus: "processing",
                })),
            ],
        });
    }
    catch (error) {
        console.error("Generate wardrobe presentations error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to start presentation generation",
        });
    }
}
//# sourceMappingURL=wardrobePresentation.controller.js.map