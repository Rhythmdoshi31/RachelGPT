import { Response } from "express";
import crypto from "node:crypto";
import { prisma } from "../lib/prisma.js";
import { supabaseAdmin } from "../lib/supabaseAdmin.js";
import { AuthenticatedRequest } from "../middleware/auth.js";
import { analyzeClothingImage } from "../services/vision/gemini.service.js";

export async function createWardrobeUploadUrl(
  req: AuthenticatedRequest,
  res: Response,
) {
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

    const storagePath =
      `${userId}/` + `${wardrobeItemId}/` + `${Date.now()}.${extension}`;

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
  } catch (error) {
    console.error("Wardrobe upload URL error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create wardrobe upload URL",
    });
  }
}

export async function completeWardrobeUpload(
  req: AuthenticatedRequest,
  res: Response,
) {
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
  } catch (error) {
    console.error("Complete wardrobe upload error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to complete wardrobe upload",
    });
  }
}

export async function getWardrobe(req: AuthenticatedRequest, res: Response) {
  try {
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    const page = Math.max(Number.parseInt(req.query.page as string) || 1, 1);

    const requestedLimit = Number.parseInt(req.query.limit as string) || 20;

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

    const wardrobe = await Promise.all(
      wardrobeItems.map(async (item) => {
        let primaryImageUrl: string | null = null;

        if (item.primaryImagePath) {
          const { data, error } = await supabaseAdmin.storage
            .from("Wardrobe")
            .createSignedUrl(item.primaryImagePath, 60 * 60);

          if (error) {
            console.error(
              `Failed to create signed URL for wardrobe item ${item.id}:`,
              error,
            );
          } else {
            primaryImageUrl = data.signedUrl;
          }
        }

        return {
          ...item,
          primaryImageUrl,
        };
      }),
    );

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
  } catch (error) {
    console.error("Get wardrobe error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to get wardrobe",
    });
  }
}

export async function createWardrobeUploadUrls(
  req: AuthenticatedRequest,
  res: Response,
) {
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

    const uploads = await Promise.all(
      files.map(
        async (
          file: {
            fileName: string;
            contentType: string;
          },
          index: number,
        ) => {
          const wardrobeItemId = crypto.randomUUID();

          const extension =
            file.fileName.split(".").pop()?.toLowerCase() || "jpg";

          const storagePath =
            `${userId}/` +
            `${wardrobeItemId}/` +
            `${Date.now()}-${index}.${extension}`;

          const { data, error } = await supabaseAdmin.storage
            .from("Wardrobe")
            .createSignedUploadUrl(storagePath);

          if (error || !data) {
            throw new Error(
              `Failed to create upload URL for file at index ${index}`,
            );
          }

          return {
            index,
            wardrobeItemId,
            storagePath,
            token: data.token,
          };
        },
      ),
    );

    return res.status(200).json({
      success: true,
      uploads,
    });
  } catch (error) {
    console.error("Create batch upload URLs error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create upload URLs",
    });
  }
}

export async function completeWardrobeUploads(
  req: AuthenticatedRequest,
  res: Response,
) {
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
        message: `Maximum ${MAX_FILES} uploads are allowed per request`,
      });
    }

    // Validate every upload before touching the database
    for (let i = 0; i < uploads.length; i++) {
      const upload = uploads[i];

      if (!upload?.wardrobeItemId || !upload?.storagePath) {
        return res.status(400).json({
          success: false,
          message: `wardrobeItemId and storagePath are required for upload at index ${i}`,
        });
      }

      const expectedPrefix = `${userId}/${upload.wardrobeItemId}/`;

      if (!upload.storagePath.startsWith(expectedPrefix)) {
        return res.status(403).json({
          success: false,
          message: `Invalid storage path for upload at index ${i}`,
        });
      }
    }

    // Make sure the same wardrobe item is not submitted twice
    const wardrobeItemIds = uploads.map(
      (upload: { wardrobeItemId: string; storagePath: string }) =>
        upload.wardrobeItemId,
    );

    const uniqueIds = new Set(wardrobeItemIds);

    if (uniqueIds.size !== wardrobeItemIds.length) {
      return res.status(400).json({
        success: false,
        message: "Duplicate wardrobeItemId found",
      });
    }

    // Make sure none of these wardrobe items already exist
    const existingItems = await prisma.wardrobeItem.findMany({
      where: {
        id: {
          in: wardrobeItemIds,
        },
      },
      select: {
        id: true,
      },
    });

    if (existingItems.length > 0) {
      return res.status(409).json({
        success: false,
        message: "One or more wardrobe items already exist",
        existingItemIds: existingItems.map((item) => item.id),
      });
    }

    const wardrobeItems = await prisma.$transaction(async (tx) => {
      const items = [];

      for (const upload of uploads) {
        const item = await tx.wardrobeItem.create({
          data: {
            id: upload.wardrobeItemId,
            userId,
            category: "unknown",
            subcategory: null,
            attributes: {},
            primaryImagePath: upload.storagePath,
          },
        });

        await tx.wardrobeImage.create({
          data: {
            userId,
            wardrobeItemId: item.id,
            storagePath: upload.storagePath,
            isPrimary: true,
          },
        });

        items.push(item);
      }

      return items;
    });

    return res.status(201).json({
      success: true,
      message: `${wardrobeItems.length} wardrobe items created successfully`,
      wardrobe: wardrobeItems,
    });
  } catch (error) {
    console.error("Complete batch wardrobe uploads error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to complete wardrobe uploads",
    });
  }
}

export async function getWardrobeItemById(
  req: AuthenticatedRequest,
  res: Response,
) {
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

    const images = await Promise.all(
      wardrobeItem.images.map(async (image) => {
        const { data, error } = await supabaseAdmin.storage
          .from("Wardrobe")
          .createSignedUrl(image.storagePath, 60 * 60);

        if (error) {
          console.error(
            `Failed to create signed URL for image ${image.id}:`,
            error,
          );

          return {
            ...image,
            imageUrl: null,
          };
        }

        return {
          ...image,
          imageUrl: data.signedUrl,
        };
      }),
    );

    return res.status(200).json({
      success: true,
      wardrobeItem: {
        ...wardrobeItem,
        images,
      },
    });
  } catch (error) {
    console.error("Get wardrobe item by ID error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to get wardrobe item",
    });
  }
}

export async function updateWardrobeItem(
  req: AuthenticatedRequest,
  res: Response,
) {
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

    if (
      category === undefined &&
      subcategory === undefined &&
      attributes === undefined
    ) {
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
  } catch (error) {
    console.error("Update wardrobe item error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update wardrobe item",
    });
  }
}

export async function deleteWardrobeItem(
  req: AuthenticatedRequest,
  res: Response,
) {
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
  } catch (error) {
    console.error("Delete wardrobe item error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete wardrobe item",
    });
  }
}

export async function analyzeWardrobeItem(
  req: AuthenticatedRequest,
  res: Response
) {
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
      console.log(
        "Downloading wardrobe image:",
        wardrobeItem.primaryImagePath
      );

      const { data: imageBlob, error: downloadError } =
        await supabaseAdmin.storage
          .from("Wardrobe")
          .download(wardrobeItem.primaryImagePath);

      if (downloadError || !imageBlob) {
        throw new Error(
          downloadError?.message ||
            "Failed to download wardrobe image"
        );
      }

      const arrayBuffer = await imageBlob.arrayBuffer();

      const buffer = Buffer.from(arrayBuffer);

      const extension =
        wardrobeItem.primaryImagePath
          .split(".")
          .pop()
          ?.toLowerCase();

      const mimeTypeMap: Record<string, string> = {
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png",
        webp: "image/webp",
        heic: "image/heic",
        heif: "image/heif",
      };

      const mimeType =
        mimeTypeMap[extension || ""] || "image/jpeg";

      const analysis = await analyzeClothingImage(
        buffer,
        mimeType
      );

      const updatedItem =
        await prisma.wardrobeItem.update({
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
    } catch (analysisError) {
      console.error(
        "Wardrobe AI analysis error:",
        analysisError
      );

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
  } catch (error) {
    console.error(
      "Analyze wardrobe item error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to analyze wardrobe item",
    });
  }
}
