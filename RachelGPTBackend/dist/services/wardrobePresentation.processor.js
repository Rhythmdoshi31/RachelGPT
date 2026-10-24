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
async function markFailed(item, error) {
    const message = error instanceof Error
        ? error.message.slice(0, 1000)
        : "Unknown presentation generation error";
    try {
        await prisma.wardrobeItem.updateMany({
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
    }
    catch (updateError) {
        console.error(`Could not save presentation failure status for ${item.id}:`, updateError);
    }
}
async function processOnePresentation(item) {
    const outputPath = `${item.userId}/${item.id}/presentation.png`;
    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
        try {
            console.log(`Generating presentation ${item.id}, attempt ${attempt}/${MAX_ATTEMPTS}`);
            const [originalBuffer, backgroundBuffer] = await Promise.all([
                downloadStorageImage(item.primaryImagePath),
                downloadStorageImage(BACKGROUND_PATH),
            ]);
            const generatedBuffer = await generateWardrobePresentationImage(originalBuffer, getMimeType(item.primaryImagePath), backgroundBuffer, getMimeType(BACKGROUND_PATH));
            if (!generatedBuffer.length) {
                throw new Error("Generated presentation image is empty");
            }
            const { error: uploadError } = await supabaseAdmin.storage
                .from(BUCKET)
                .upload(outputPath, generatedBuffer, {
                contentType: "image/png",
                upsert: true,
            });
            if (uploadError) {
                throw new Error(`Failed to upload presentation image: ${uploadError.message}`);
            }
            // Only mark completed if this job still owns the processing state.
            const updated = await prisma.wardrobeItem.updateMany({
                where: {
                    id: item.id,
                    userId: item.userId,
                    presentationImageStatus: "processing",
                },
                data: {
                    presentationImagePath: outputPath,
                    presentationImageStatus: "completed",
                    presentationImageError: null,
                },
            });
            if (updated.count === 0) {
                console.warn(`Presentation result for ${item.id} was uploaded, but its database status had changed.`);
                return;
            }
            console.log(`Presentation completed: ${item.id}`);
            return;
        }
        catch (error) {
            console.error(`Presentation failed for ${item.id}, attempt ${attempt}:`, error);
            if (attempt < MAX_ATTEMPTS && isRetryableError(error)) {
                await sleep(1000 * 2 ** (attempt - 1));
                continue;
            }
            await markFailed(item, error);
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
                // The controller has already claimed this item.
                // Do not reset its status or clear its error here.
                await processOnePresentation(item);
            }
            catch (error) {
                console.error(`Unexpected processor error for ${item.id}:`, error);
                await markFailed(item, error);
            }
        }
    }
    await Promise.all(Array.from({ length: Math.min(CONCURRENCY, items.length) }, () => worker()));
    console.log(`Presentation batch finished. Total items: ${items.length}`);
}
//# sourceMappingURL=wardrobePresentation.processor.js.map