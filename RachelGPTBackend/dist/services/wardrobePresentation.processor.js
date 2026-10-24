import path from "node:path";
import { prisma } from "../lib/prisma.js";
import { supabaseAdmin } from "../lib/supabaseAdmin.js";
import { generateWardrobePresentationImage } from "./wardrobePresentation.service.js";
const BUCKET = "Wardrobe";
const CONCURRENCY = 2;
const MAX_ATTEMPTS = 3;
const backgroundPathFromEnv = process.env.WARDROBE_BACKGROUND_PATH;
if (!backgroundPathFromEnv) {
    throw new Error("WARDROBE_BACKGROUND_PATH is missing from .env");
}
const BACKGROUND_PATH = backgroundPathFromEnv;
function getMimeType(storagePath) {
    const extension = path.extname(storagePath).toLowerCase();
    switch (extension) {
        case ".png":
            return "image/png";
        case ".webp":
            return "image/webp";
        case ".heic":
            return "image/heic";
        case ".heif":
            return "image/heif";
        case ".jpg":
        case ".jpeg":
        default:
            return "image/jpeg";
    }
}
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
function isRetryableError(error) {
    const message = error instanceof Error ? error.message : String(error);
    return /429|500|502|503|504|RESOURCE_EXHAUSTED|UNAVAILABLE|INTERNAL|timeout|fetch failed/i.test(message);
}
async function downloadStorageImage(storagePath) {
    const { data, error } = await supabaseAdmin.storage
        .from(BUCKET)
        .download(storagePath);
    if (error || !data) {
        throw new Error(`Failed to download ${storagePath}: ${error?.message ?? "No file data"}`);
    }
    return Buffer.from(await data.arrayBuffer());
}
async function processOnePresentation(item) {
    const outputPath = `${item.userId}/${item.id}/presentation.png`;
    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
        try {
            console.log(`Generating wardrobe presentation ${item.id}, attempt ${attempt}/${MAX_ATTEMPTS}`);
            // Download both reference images from the private bucket.
            const [originalBuffer, backgroundBuffer] = await Promise.all([
                downloadStorageImage(item.primaryImagePath),
                downloadStorageImage(BACKGROUND_PATH),
            ]);
            // Generate the presentation image.
            const generatedBuffer = await generateWardrobePresentationImage(originalBuffer, getMimeType(item.primaryImagePath), backgroundBuffer, getMimeType(BACKGROUND_PATH));
            if (generatedBuffer.length === 0) {
                throw new Error("Generated presentation image is empty");
            }
            // Upload separately; never overwrite the original photo.
            const { error: uploadError } = await supabaseAdmin.storage
                .from(BUCKET)
                .upload(outputPath, generatedBuffer, {
                contentType: "image/png",
                upsert: true,
            });
            if (uploadError) {
                throw new Error(`Failed to upload presentation image: ${uploadError.message}`);
            }
            // Only mark completed after Storage upload succeeds.
            await prisma.wardrobeItem.update({
                where: { id: item.id },
                data: {
                    presentationImagePath: outputPath,
                    presentationImageStatus: "completed",
                    presentationImageError: null,
                },
            });
            console.log(`Wardrobe presentation completed: ${item.id}`);
            return;
        }
        catch (error) {
            console.error(`Presentation generation failed for ${item.id}, attempt ${attempt}:`, error);
            const canRetry = attempt < MAX_ATTEMPTS && isRetryableError(error);
            if (canRetry) {
                await sleep(1000 * 2 ** (attempt - 1));
                continue;
            }
            // Keep the original image and analysis intact.
            try {
                await prisma.wardrobeItem.update({
                    where: { id: item.id },
                    data: {
                        presentationImageStatus: "failed",
                        presentationImageError: error instanceof Error
                            ? error.message.slice(0, 1000)
                            : "Unknown presentation generation error",
                    },
                });
            }
            catch (updateError) {
                console.error(`Could not save presentation failure status for ${item.id}:`, updateError);
            }
            return;
        }
    }
}
export async function processWardrobePresentationBatch(items) {
    if (items.length === 0)
        return;
    let currentIndex = 0;
    async function worker() {
        while (true) {
            const index = currentIndex++;
            if (index >= items.length)
                return;
            const item = items[index];
            try {
                await prisma.wardrobeItem.update({
                    where: {
                        id: item.id,
                        userId: item.userId,
                    },
                    data: {
                        presentationImageStatus: "processing",
                        presentationImageError: null,
                    },
                });
                await processOnePresentation(item);
            }
            catch (error) {
                console.error(`Could not process presentation for ${item.id}:`, error);
                try {
                    await prisma.wardrobeItem.update({
                        where: {
                            id: item.id,
                            userId: item.userId,
                        },
                        data: {
                            presentationImageStatus: "failed",
                            presentationImageError: error instanceof Error
                                ? error.message.slice(0, 1000)
                                : "Unknown processing error",
                        },
                    });
                }
                catch (updateError) {
                    console.error(`Could not update presentation status for ${item.id}:`, updateError);
                }
            }
        }
    }
    await Promise.all(Array.from({ length: Math.min(CONCURRENCY, items.length) }, () => worker()));
    console.log(`Wardrobe presentation batch finished. Total items: ${items.length}`);
}
//# sourceMappingURL=wardrobePresentation.processor.js.map