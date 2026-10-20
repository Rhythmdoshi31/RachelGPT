import { Response } from "express";
import { prisma } from "../lib/prisma.js";
import { AuthenticatedRequest } from "../middleware/auth.js";

const VALID_GENDERS = ["FEMALE", "MALE"] as const;

const VALID_SELECTIONS = [
  "hairstyle",
  "faceShape",
  "skinTone",
  "bodyType",
] as const;

type SelectionField = (typeof VALID_SELECTIONS)[number];

function isValidSelection(value: unknown): value is number {
  return (
    typeof value === "number" &&
    Number.isInteger(value) &&
    value >= 1 &&
    value <= 5
  );
}

function getDefaultImage(gender: "FEMALE" | "MALE") {
  return gender === "FEMALE"
    ? {
        imageCode: "image1",
        imagePath: "defaults/image1.png",
      }
    : {
        imageCode: "image2",
        imagePath: "defaults/image2.png",
      };
}

export async function getAvatar(
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

    const avatar = await prisma.avatar.findUnique({
      where: { userId },
    });

    return res.status(200).json({
      success: true,
      avatar,
    });
  } catch (error) {
    console.error("Get avatar error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to retrieve avatar",
    });
  }
}

export async function saveAvatar(
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

    const { gender, hairstyle, faceShape, skinTone, bodyType } =
      req.body ?? {};

    if (
      gender !== undefined &&
      !(VALID_GENDERS as readonly unknown[]).includes(gender)
    ) {
      return res.status(400).json({
        success: false,
        message: "Gender must be FEMALE or MALE",
      });
    }

    const selections: Partial<Record<SelectionField, number | null>> = {};

    for (const field of VALID_SELECTIONS) {
      const value = req.body?.[field];

      if (value === undefined) {
        continue;
      }

      if (value !== null && !isValidSelection(value)) {
        return res.status(400).json({
          success: false,
          message: `${field} must be an integer from 1 to 5, or null`,
        });
      }

      selections[field] = value;
    }

    const existingAvatar = await prisma.avatar.findUnique({
      where: { userId },
      select: { gender: true },
    });

    const effectiveGender =
      gender ?? existingAvatar?.gender ?? "FEMALE";

    const imageDefaults = getDefaultImage(effectiveGender);

    const avatar = await prisma.avatar.upsert({
      where: { userId },

      create: {
        userId,
        gender: effectiveGender,
        ...selections,
        ...imageDefaults,
      },

      update: {
        ...(gender !== undefined ? { gender } : {}),
        ...selections,
        ...(gender !== undefined ? imageDefaults : {}),
      },
    });

    return res.status(200).json({
      success: true,
      message: "Avatar saved successfully",
      avatar,
    });
  } catch (error) {
    console.error("Save avatar error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to save avatar",
    });
  }
}