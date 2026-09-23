import path from "node:path";
import crypto from "node:crypto";
import { prisma } from "../lib/prisma.js";
import { supabaseAdmin } from "../lib/supabaseAdmin.js";
import { analyzeClothingImage } from "../services/vision/gemini.service.js";
export async function createWardrobeUploadUrl(req, res) {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "User not authenticated",
            });
        }
        const { fileName, contentType } = req.body;
        if (!fileName || !contentType) {
            return res.status(400).json({
                success: false,
                message: "fileName and contentType are required",
            });
        }
        const allowedTypes = [
            "image/jpeg",
            "image/png",
            "image/webp",
            "image/heic",
            "image/heif",
        ];
        if (!allowedTypes.includes(contentType)) {
            return res.status(400).json({
                success: false,
                message: "Unsupported image type",
            });
        }
        /*
         * Generate the wardrobe item ID ourselves.
         * This ID will later be used by the actual WardrobeItem row.
         */
        const wardrobeItemId = crypto.randomUUID();
        const extension = fileName.split(".").pop()?.toLowerCase() || "jpg";
        const storagePath = `${userId}/` + `${wardrobeItemId}/` + `${Date.now()}.${extension}`;
        const { data, error } = await supabaseAdmin.storage
            .from("Wardrobe")
            .createSignedUploadUrl(storagePath);
        if (error || !data) {
            console.error("Create upload URL error:", error);
            return res.status(500).json({
                success: false,
                message: "Failed to create upload URL",
            });
        }
        return res.status(200).json({
            success: true,
            upload: {
                wardrobeItemId,
                storagePath,
                token: data.token,
            },
        });
    }
    catch (error) {
        console.error("Wardrobe upload URL error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to create wardrobe upload URL",
        });
    }
}
export async function completeWardrobeUpload(req, res) {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "User not authenticated",
            });
        }
        const { wardrobeItemId, storagePath, category, subcategory } = req.body;
        if (!wardrobeItemId || !storagePath || !category) {
            return res.status(400).json({
                success: false,
                message: "wardrobeItemId, storagePath and category are required",
            });
        }
        /*
         * Make sure the storage path belongs to the
         * authenticated user.
         *
         * Expected:
         * <userId>/<wardrobeItemId>/<filename>
         */
        const expectedPrefix = `${userId}/${wardrobeItemId}/`;
        if (!storagePath.startsWith(expectedPrefix)) {
            return res.status(403).json({
                success: false,
                message: "Invalid storage path",
            });
        }
        /*
         * Make sure this wardrobe item does not already exist.
         */
        const existingItem = await prisma.wardrobeItem.findUnique({
            where: {
                id: wardrobeItemId,
            },
        });
        if (existingItem) {
            return res.status(409).json({
                success: false,
                message: "Wardrobe item already exists",
            });
        }
        /*
         * Create both records together.
         *
         * If either creation fails, neither record is saved.
         */
        const wardrobeItem = await prisma.$transaction(async (tx) => {
            const item = await tx.wardrobeItem.create({
                data: {
                    id: wardrobeItemId,
                    userId,
                    category,
                    subcategory: subcategory ?? null,
                    // AI analysis hasn't happened yet.
                    attributes: {},
                    primaryImagePath: storagePath,
                },
            });
            await tx.wardrobeImage.create({
                data: {
                    userId,
                    wardrobeItemId: item.id,
                    storagePath,
                    isPrimary: true,
                },
            });
            return item;
        });
        return res.status(201).json({
            success: true,
            message: "Wardrobe item created successfully",
            wardrobeItem,
        });
    }
    catch (error) {
        console.error("Complete wardrobe upload error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to complete wardrobe upload",
        });
    }
}
export async function getWardrobe(req, res) {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "User not authenticated",
            });
        }
        const page = Math.max(Number.parseInt(req.query.page) || 1, 1);
        const requestedLimit = Number.parseInt(req.query.limit) || 20;
        const limit = Math.min(Math.max(requestedLimit, 1), 50);
        const skip = (page - 1) * limit;
        const [wardrobeItems, total] = await Promise.all([
            prisma.wardrobeItem.findMany({
                where: {
                    userId,
                    isArchived: false,
                },
                include: {
                    images: true,
                },
                orderBy: {
                    addedAt: "desc",
                },
                skip,
                take: limit,
            }),
            prisma.wardrobeItem.count({
                where: {
                    userId,
                    isArchived: false,
                },
            }),
        ]);
        const wardrobe = await Promise.all(wardrobeItems.map(async (item) => {
            let primaryImageUrl = null;
            if (item.primaryImagePath) {
                const { data, error } = await supabaseAdmin.storage
                    .from("Wardrobe")
                    .createSignedUrl(item.primaryImagePath, 60 * 60);
                if (error) {
                    console.error(`Failed to create signed URL for wardrobe item ${item.id}:`, error);
                }
                else {
                    primaryImageUrl = data.signedUrl;
                }
            }
            return {
                ...item,
                primaryImageUrl,
            };
        }));
        const totalPages = Math.ceil(total / limit);
        return res.status(200).json({
            success: true,
            pagination: {
                page,
                limit,
                total,
                totalPages,
                hasNextPage: page < totalPages,
                hasPreviousPage: page > 1,
            },
            wardrobe,
        });
    }
    catch (error) {
        console.error("Get wardrobe error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to get wardrobe",
        });
    }
}
export async function createWardrobeUploadUrls(req, res) {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "User not authenticated",
            });
        }
        const { files } = req.body;
        if (!Array.isArray(files) || files.length === 0) {
            return res.status(400).json({
                success: false,
                message: "files must be a non-empty array",
            });
        }
        const MAX_FILES = 50;
        if (files.length > MAX_FILES) {
            return res.status(400).json({
                success: false,
                message: `Maximum ${MAX_FILES} files are allowed per request`,
            });
        }
        const allowedTypes = [
            "image/jpeg",
            "image/png",
            "image/webp",
            "image/heic",
            "image/heif",
        ];
        // Validate every file before generating anything
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (!file?.fileName || !file?.contentType) {
                return res.status(400).json({
                    success: false,
                    message: `fileName and contentType are required for file at index ${i}`,
                });
            }
            if (!allowedTypes.includes(file.contentType)) {
                return res.status(400).json({
                    success: false,
                    message: `Unsupported image type at index ${i}: ${file.contentType}`,
                });
            }
        }
        const uploads = await Promise.all(files.map(async (file, index) => {
            const wardrobeItemId = crypto.randomUUID();
            const extension = file.fileName.split(".").pop()?.toLowerCase() || "jpg";
            const storagePath = `${userId}/` +
                `${wardrobeItemId}/` +
                `${Date.now()}-${index}.${extension}`;
            const { data, error } = await supabaseAdmin.storage
                .from("Wardrobe")
                .createSignedUploadUrl(storagePath);
            if (error || !data) {
                throw new Error(`Failed to create upload URL for file at index ${index}`);
            }
            return {
                index,
                wardrobeItemId,
                storagePath,
                token: data.token,
            };
        }));
        return res.status(200).json({
            success: true,
            uploads,
        });
    }
    catch (error) {
        console.error("Create batch upload URLs error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to create upload URLs",
        });
    }
}
export async function completeWardrobeUploads(req, res) {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "User not authenticated",
            });
        }
        const { uploads } = req.body;
        if (!Array.isArray(uploads) || uploads.length === 0) {
            return res.status(400).json({
                success: false,
                message: "uploads must be a non-empty array",
            });
        }
        const MAX_FILES = 50;
        if (uploads.length > MAX_FILES) {
            return res.status(400).json({
                success: false,
                message: `Maximum ${MAX_FILES} files are allowed per request`,
            });
        }
        /*
         * ---------------------------------------------------------
         * 1. Validate request structure
         * ---------------------------------------------------------
         */
        for (let i = 0; i < uploads.length; i++) {
            const upload = uploads[i];
            if (!upload?.wardrobeItemId || !upload?.storagePath) {
                return res.status(400).json({
                    success: false,
                    message: `wardrobeItemId and storagePath are required for upload at index ${i}`,
                });
            }
        }
        /*
         * ---------------------------------------------------------
         * 2. Validate ownership of every storage path
         *
         * Expected:
         *
         * userId/
         *   wardrobeItemId/
         *     filename.jpg
         * ---------------------------------------------------------
         */
        const expectedPrefix = `${userId}/`;
        const seenWardrobeItemIds = new Set();
        for (let i = 0; i < uploads.length; i++) {
            const upload = uploads[i];
            const { wardrobeItemId, storagePath } = upload;
            // Prevent duplicate wardrobe item IDs in the same request
            if (seenWardrobeItemIds.has(wardrobeItemId)) {
                return res.status(400).json({
                    success: false,
                    message: `Duplicate wardrobeItemId at index ${i}`,
                });
            }
            seenWardrobeItemIds.add(wardrobeItemId);
            // Storage path must belong to the authenticated user
            if (!storagePath.startsWith(expectedPrefix)) {
                return res.status(400).json({
                    success: false,
                    message: `Invalid storage path at index ${i}`,
                });
            }
            // The path must specifically contain:
            // userId/wardrobeItemId/
            const itemPrefix = `${userId}/${wardrobeItemId}/`;
            if (!storagePath.startsWith(itemPrefix)) {
                return res.status(400).json({
                    success: false,
                    message: `Storage path does not match wardrobeItemId at index ${i}`,
                });
            }
            // Make sure there is actually a filename after the item folder
            const fileName = storagePath.substring(itemPrefix.length);
            if (!fileName || fileName.includes("/")) {
                return res.status(400).json({
                    success: false,
                    message: `Invalid storage filename at index ${i}`,
                });
            }
        }
        /*
         * ---------------------------------------------------------
         * 3. Check whether these wardrobe IDs already exist
         * ---------------------------------------------------------
         */
        const wardrobeItemIds = uploads.map((upload) => upload.wardrobeItemId);
        const existingItems = await prisma.wardrobeItem.findMany({
            where: {
                id: {
                    in: wardrobeItemIds,
                },
                userId,
            },
            select: {
                id: true,
            },
        });
        if (existingItems.length > 0) {
            return res.status(409).json({
                success: false,
                message: "One or more wardrobe items already exist",
                existingWardrobeItemIds: existingItems.map((item) => item.id),
            });
        }
        /*
         * ---------------------------------------------------------
         * 4. VERIFY THAT EVERY STORAGE OBJECT ACTUALLY EXISTS
         *
         * We use Storage.list() instead of download().
         *
         * download() would download the entire image just to check
         * whether it exists, which is unnecessary.
         * ---------------------------------------------------------
         */
        const storageChecks = await Promise.all(uploads.map(async (upload) => {
            const lastSlashIndex = upload.storagePath.lastIndexOf("/");
            const folderPath = upload.storagePath.substring(0, lastSlashIndex);
            const fileName = upload.storagePath.substring(lastSlashIndex + 1);
            const { data, error } = await supabaseAdmin.storage
                .from("Wardrobe")
                .list(folderPath, {
                limit: 100,
                search: fileName,
            });
            if (error) {
                return {
                    wardrobeItemId: upload.wardrobeItemId,
                    storagePath: upload.storagePath,
                    exists: false,
                    error: error.message,
                };
            }
            const exists = (data ?? []).some((file) => file.name === fileName);
            return {
                wardrobeItemId: upload.wardrobeItemId,
                storagePath: upload.storagePath,
                exists,
                error: null,
            };
        }));
        /*
         * ---------------------------------------------------------
         * 5. Reject the ENTIRE batch if even one image is missing
         *
         * This is important.
         *
         * We don't want:
         *
         * 3 images uploaded
         * 2 DB records created
         * 1 missing image silently ignored
         *
         * Instead, the database remains untouched.
         * ---------------------------------------------------------
         */
        const missingUploads = storageChecks.filter((check) => !check.exists);
        if (missingUploads.length > 0) {
            console.error("Missing wardrobe storage objects:", missingUploads);
            return res.status(400).json({
                success: false,
                message: "One or more uploaded images were not found in Supabase Storage",
                missingUploads: missingUploads.map((upload) => ({
                    wardrobeItemId: upload.wardrobeItemId,
                    storagePath: upload.storagePath,
                    error: upload.error,
                })),
            });
        }
        /*
         * ---------------------------------------------------------
         * 6. Everything is valid.
         *
         * Now create the DB records.
         * ---------------------------------------------------------
         */
        const createdItems = await prisma.$transaction(uploads.map((upload) => prisma.wardrobeItem.create({
            data: {
                id: upload.wardrobeItemId,
                userId,
                category: "unknown",
                subcategory: null,
                attributes: {},
                analysisStatus: "pending",
                primaryImagePath: upload.storagePath,
                images: {
                    create: {
                        userId,
                        storagePath: upload.storagePath,
                        isPrimary: true,
                    },
                },
            },
            include: {
                images: true,
            },
        })));
        /*
         * ---------------------------------------------------------
         * 7. Success
         * ---------------------------------------------------------
         */
        return res.status(201).json({
            success: true,
            message: `${createdItems.length} wardrobe items created successfully`,
            items: createdItems,
        });
    }
    catch (error) {
        console.error("Complete batch wardrobe upload error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to complete wardrobe uploads",
        });
    }
}
export async function getWardrobeItemById(req, res) {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "User not authenticated",
            });
        }
        const idParam = req.params.id;
        if (!idParam || Array.isArray(idParam)) {
            return res.status(400).json({
                success: false,
                message: "Invalid wardrobe item ID",
            });
        }
        const wardrobeItem = await prisma.wardrobeItem.findFirst({
            where: {
                id: idParam,
                userId,
                isArchived: false,
            },
            include: {
                images: {
                    orderBy: {
                        createdAt: "asc",
                    },
                },
            },
        });
        if (!wardrobeItem) {
            return res.status(404).json({
                success: false,
                message: "Wardrobe item not found",
            });
        }
        const images = await Promise.all(wardrobeItem.images.map(async (image) => {
            const { data, error } = await supabaseAdmin.storage
                .from("Wardrobe")
                .createSignedUrl(image.storagePath, 60 * 60);
            if (error) {
                console.error(`Failed to create signed URL for image ${image.id}:`, error);
                return {
                    ...image,
                    imageUrl: null,
                };
            }
            return {
                ...image,
                imageUrl: data.signedUrl,
            };
        }));
        return res.status(200).json({
            success: true,
            wardrobeItem: {
                ...wardrobeItem,
                images,
            },
        });
    }
    catch (error) {
        console.error("Get wardrobe item by ID error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to get wardrobe item",
        });
    }
}
export async function updateWardrobeItem(req, res) {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "User not authenticated",
            });
        }
        const idParam = req.params.id;
        if (!idParam || Array.isArray(idParam)) {
            return res.status(400).json({
                success: false,
                message: "Invalid wardrobe item ID",
            });
        }
        const { category, subcategory, attributes } = req.body;
        if (category === undefined &&
            subcategory === undefined &&
            attributes === undefined) {
            return res.status(400).json({
                success: false,
                message: "No fields provided to update",
            });
        }
        const existingItem = await prisma.wardrobeItem.findFirst({
            where: {
                id: idParam,
                userId,
                isArchived: false,
            },
        });
        if (!existingItem) {
            return res.status(404).json({
                success: false,
                message: "Wardrobe item not found",
            });
        }
        const wardrobeItem = await prisma.wardrobeItem.update({
            where: {
                id: idParam,
            },
            data: {
                ...(category !== undefined && {
                    category,
                }),
                ...(subcategory !== undefined && {
                    subcategory,
                }),
                ...(attributes !== undefined && {
                    attributes,
                }),
            },
            include: {
                images: true,
            },
        });
        return res.status(200).json({
            success: true,
            message: "Wardrobe item updated successfully",
            wardrobeItem,
        });
    }
    catch (error) {
        console.error("Update wardrobe item error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to update wardrobe item",
        });
    }
}
export async function deleteWardrobeItem(req, res) {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "User not authenticated",
            });
        }
        const idParam = req.params.id;
        if (!idParam || Array.isArray(idParam)) {
            return res.status(400).json({
                success: false,
                message: "Invalid wardrobe item ID",
            });
        }
        const existingItem = await prisma.wardrobeItem.findFirst({
            where: {
                id: idParam,
                userId,
                isArchived: false,
            },
        });
        if (!existingItem) {
            return res.status(404).json({
                success: false,
                message: "Wardrobe item not found",
            });
        }
        await prisma.wardrobeItem.update({
            where: {
                id: idParam,
            },
            data: {
                isArchived: true,
            },
        });
        return res.status(200).json({
            success: true,
            message: "Wardrobe item deleted successfully",
        });
    }
    catch (error) {
        console.error("Delete wardrobe item error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to delete wardrobe item",
        });
    }
}
export async function analyzeWardrobeItem(req, res) {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "User not authenticated",
            });
        }
        const idParam = req.params.id;
        if (!idParam || Array.isArray(idParam)) {
            return res.status(400).json({
                success: false,
                message: "Invalid wardrobe item ID",
            });
        }
        const wardrobeItem = await prisma.wardrobeItem.findFirst({
            where: {
                id: idParam,
                userId,
                isArchived: false,
            },
        });
        if (!wardrobeItem) {
            return res.status(404).json({
                success: false,
                message: "Wardrobe item not found",
            });
        }
        if (!wardrobeItem.primaryImagePath) {
            return res.status(400).json({
                success: false,
                message: "Wardrobe item has no primary image",
            });
        }
        // Mark analysis as processing
        await prisma.wardrobeItem.update({
            where: {
                id: wardrobeItem.id,
            },
            data: {
                analysisStatus: "processing",
            },
        });
        try {
            console.log("Downloading wardrobe image:", wardrobeItem.primaryImagePath);
            const { data: imageBlob, error: downloadError } = await supabaseAdmin.storage
                .from("Wardrobe")
                .download(wardrobeItem.primaryImagePath);
            if (downloadError || !imageBlob) {
                throw new Error(downloadError?.message ||
                    "Failed to download wardrobe image");
            }
            const arrayBuffer = await imageBlob.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            const extension = wardrobeItem.primaryImagePath
                .split(".")
                .pop()
                ?.toLowerCase();
            const mimeTypeMap = {
                jpg: "image/jpeg",
                jpeg: "image/jpeg",
                png: "image/png",
                webp: "image/webp",
                heic: "image/heic",
                heif: "image/heif",
            };
            const mimeType = mimeTypeMap[extension || ""] || "image/jpeg";
            const analysis = await analyzeClothingImage(buffer, mimeType);
            const updatedItem = await prisma.wardrobeItem.update({
                where: {
                    id: wardrobeItem.id,
                },
                data: {
                    category: analysis.category,
                    subcategory: analysis.subcategory,
                    attributes: analysis.attributes,
                    analysisStatus: "completed",
                },
            });
            return res.status(200).json({
                success: true,
                wardrobeItemId: updatedItem.id,
                analysis,
                wardrobeItem: updatedItem,
            });
        }
        catch (analysisError) {
            console.error("Wardrobe AI analysis error:", analysisError);
            await prisma.wardrobeItem.update({
                where: {
                    id: wardrobeItem.id,
                },
                data: {
                    analysisStatus: "failed",
                },
            });
            return res.status(502).json({
                success: false,
                message: "Wardrobe image analysis failed",
            });
        }
    }
    catch (error) {
        console.error("Analyze wardrobe item error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to analyze wardrobe item",
        });
    }
}
export async function analyzeWardrobeBatch(req, res) {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "User not authenticated",
            });
        }
        const { wardrobeItemIds } = req.body;
        /*
         * ---------------------------------------------------------
         * 1. Validate request
         * ---------------------------------------------------------
         */
        if (!Array.isArray(wardrobeItemIds) ||
            wardrobeItemIds.length === 0) {
            return res.status(400).json({
                success: false,
                message: "wardrobeItemIds must be a non-empty array",
            });
        }
        const MAX_FILES = 50;
        if (wardrobeItemIds.length > MAX_FILES) {
            return res.status(400).json({
                success: false,
                message: `Maximum ${MAX_FILES} wardrobe items can be analyzed at once`,
            });
        }
        /*
         * Remove duplicate IDs while preserving order.
         */
        const uniqueIds = [...new Set(wardrobeItemIds)];
        if (uniqueIds.length !== wardrobeItemIds.length) {
            return res.status(400).json({
                success: false,
                message: "Duplicate wardrobeItemIds are not allowed",
            });
        }
        /*
         * ---------------------------------------------------------
         * 2. Find all requested items belonging to this user
         * ---------------------------------------------------------
         */
        const wardrobeItems = await prisma.wardrobeItem.findMany({
            where: {
                id: {
                    in: uniqueIds,
                },
                userId,
                isArchived: false,
            },
            select: {
                id: true,
                primaryImagePath: true,
                analysisStatus: true,
            },
        });
        /*
         * Make sure every requested ID was found.
         */
        const foundIds = new Set(wardrobeItems.map((item) => item.id));
        const missingIds = uniqueIds.filter((id) => !foundIds.has(id));
        if (missingIds.length > 0) {
            return res.status(404).json({
                success: false,
                message: "One or more wardrobe items were not found",
                missingWardrobeItemIds: missingIds,
            });
        }
        /*
         * ---------------------------------------------------------
         * 3. Validate image paths
         * ---------------------------------------------------------
         */
        const itemsWithoutImages = wardrobeItems.filter((item) => !item.primaryImagePath);
        if (itemsWithoutImages.length > 0) {
            return res.status(400).json({
                success: false,
                message: "One or more wardrobe items do not have an image",
                wardrobeItemIds: itemsWithoutImages.map((item) => item.id),
            });
        }
        /*
         * ---------------------------------------------------------
         * 4. Only process pending / failed items
         *
         * Completed items are skipped.
         * Processing items are also skipped so that two batch
         * requests cannot intentionally start the same analysis.
         * ---------------------------------------------------------
         */
        const itemsToAnalyze = wardrobeItems.filter((item) => item.analysisStatus === "pending" ||
            item.analysisStatus === "failed");
        const skippedItems = wardrobeItems.filter((item) => item.analysisStatus !== "pending" &&
            item.analysisStatus !== "failed");
        if (itemsToAnalyze.length === 0) {
            return res.status(200).json({
                success: true,
                message: "No wardrobe items need analysis",
                totalRequested: uniqueIds.length,
                queued: 0,
                skipped: skippedItems.map((item) => ({
                    wardrobeItemId: item.id,
                    analysisStatus: item.analysisStatus,
                })),
            });
        }
        /*
         * ---------------------------------------------------------
         * 5. Mark all selected items as processing
         *
         * This happens BEFORE starting Gemini requests.
         * ---------------------------------------------------------
         */
        await prisma.wardrobeItem.updateMany({
            where: {
                id: {
                    in: itemsToAnalyze.map((item) => item.id),
                },
                userId,
            },
            data: {
                analysisStatus: "processing",
            },
        });
        /*
         * ---------------------------------------------------------
         * 6. Start background processing
         *
         * IMPORTANT:
         *
         * We intentionally do NOT await this.
         *
         * The API returns immediately while Gemini processing
         * continues in the background.
         * ---------------------------------------------------------
         */
        void processWardrobeAnalysisBatch(itemsToAnalyze.map((item) => ({
            id: item.id,
            primaryImagePath: item.primaryImagePath,
        })));
        /*
         * ---------------------------------------------------------
         * 7. Return immediately
         * ---------------------------------------------------------
         */
        return res.status(202).json({
            success: true,
            message: "Wardrobe analysis started",
            totalRequested: uniqueIds.length,
            queued: itemsToAnalyze.length,
            skipped: skippedItems.map((item) => ({
                wardrobeItemId: item.id,
                analysisStatus: item.analysisStatus,
            })),
        });
    }
    catch (error) {
        console.error("Analyze wardrobe batch error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to start wardrobe analysis",
        });
    }
}
async function processWardrobeAnalysisBatch(items) {
    const CONCURRENCY = 3;
    let currentIndex = 0;
    async function worker() {
        while (true) {
            /*
             * Get the next item.
             *
             * JavaScript is single-threaded, so this synchronous
             * increment is safe between awaits.
             */
            const index = currentIndex++;
            if (index >= items.length) {
                return;
            }
            const item = items[index];
            try {
                console.log(`Starting wardrobe analysis ${index + 1}/${items.length}: ${item.id}`);
                /*
                 * -----------------------------------------------------
                 * Download image from Supabase Storage
                 * -----------------------------------------------------
                 */
                const { data, error } = await supabaseAdmin.storage
                    .from("Wardrobe")
                    .download(item.primaryImagePath);
                if (error || !data) {
                    throw new Error(error?.message ||
                        "Failed to download wardrobe image");
                }
                /*
                 * -----------------------------------------------------
                 * Convert Blob → Buffer
                 * -----------------------------------------------------
                 */
                const imageBuffer = Buffer.from(await data.arrayBuffer());
                /*
                 * -----------------------------------------------------
                 * Determine MIME type
                 * -----------------------------------------------------
                 */
                const extension = path
                    .extname(item.primaryImagePath)
                    .toLowerCase();
                let mimeType = "image/jpeg";
                if (extension === ".png") {
                    mimeType = "image/png";
                }
                else if (extension === ".webp") {
                    mimeType = "image/webp";
                }
                else if (extension === ".heic") {
                    mimeType = "image/heic";
                }
                else if (extension === ".heif") {
                    mimeType = "image/heif";
                }
                /*
                 * -----------------------------------------------------
                 * Send image to Gemini
                 * -----------------------------------------------------
                 */
                const analysis = await analyzeClothingImage(imageBuffer, mimeType);
                /*
                 * -----------------------------------------------------
                 * Save analysis
                 * -----------------------------------------------------
                 */
                await prisma.wardrobeItem.update({
                    where: {
                        id: item.id,
                    },
                    data: {
                        category: analysis.category,
                        subcategory: analysis.subcategory,
                        attributes: analysis.attributes,
                        analysisStatus: "completed",
                    },
                });
                console.log(`Wardrobe analysis completed: ${item.id}`);
            }
            catch (error) {
                console.error(`Wardrobe analysis failed for ${item.id}:`, error);
                /*
                 * IMPORTANT:
                 *
                 * One failed image does NOT stop the other workers.
                 */
                try {
                    await prisma.wardrobeItem.update({
                        where: {
                            id: item.id,
                        },
                        data: {
                            analysisStatus: "failed",
                        },
                    });
                }
                catch (updateError) {
                    console.error(`Failed to mark wardrobe item ${item.id} as failed:`, updateError);
                }
            }
        }
    }
    /*
     * Start exactly CONCURRENCY workers.
     */
    const workers = Array.from({
        length: Math.min(CONCURRENCY, items.length),
    }, () => worker());
    await Promise.all(workers);
    console.log(`Wardrobe batch analysis finished. Total items: ${items.length}`);
}
export async function getWardrobeAnalysisStatus(req, res) {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }
        const idsParam = req.query.ids;
        if (typeof idsParam !== "string" || !idsParam.trim()) {
            return res.status(400).json({
                success: false,
                message: "ids query parameter is required",
            });
        }
        const wardrobeItemIds = idsParam
            .split(",")
            .map((id) => id.trim())
            .filter(Boolean);
        if (wardrobeItemIds.length === 0) {
            return res.status(400).json({
                success: false,
                message: "At least one wardrobe item ID is required",
            });
        }
        if (wardrobeItemIds.length > 50) {
            return res.status(400).json({
                success: false,
                message: "Maximum 50 wardrobe item IDs are allowed",
            });
        }
        const uniqueIds = [...new Set(wardrobeItemIds)];
        const items = await prisma.wardrobeItem.findMany({
            where: {
                id: {
                    in: uniqueIds,
                },
                userId,
                isArchived: false,
            },
            select: {
                id: true,
                category: true,
                subcategory: true,
                attributes: true,
                analysisStatus: true,
                primaryImagePath: true,
            },
        });
        const itemMap = new Map(items.map((item) => [item.id, item]));
        const result = uniqueIds.map((id) => {
            const item = itemMap.get(id);
            if (!item) {
                return {
                    id,
                    analysisStatus: "not_found",
                };
            }
            return {
                id: item.id,
                analysisStatus: item.analysisStatus,
                category: item.category,
                subcategory: item.subcategory,
                attributes: item.attributes,
            };
        });
        const allCompleted = result.every((item) => item.analysisStatus === "completed" ||
            item.analysisStatus === "failed");
        return res.json({
            success: true,
            allCompleted,
            items: result,
        });
    }
    catch (error) {
        console.error("Get wardrobe analysis status error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to get wardrobe analysis status",
        });
    }
}
//# sourceMappingURL=wardrobe.controller.js.map