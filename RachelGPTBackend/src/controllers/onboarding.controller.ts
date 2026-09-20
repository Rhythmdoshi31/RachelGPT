import { Response } from "express";
import { prisma } from "../lib/prisma.js";
import { AuthenticatedRequest } from "../middleware/auth.js";

export async function saveStyleProfile(
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

    const {
      preferences,
      experimentingWith,
      lifestyle,
      occasions,
      desiredAppearance,
      summary,
    } = req.body;

    // preferences is the only required part of the style profile
    if (!preferences) {
      return res.status(400).json({
        success: false,
        message: "Preferences are required",
      });
    }

    const styleProfile = await prisma.userStyleProfile.upsert({
      where: {
        userId,
      },

      create: {
        userId,
        preferences,
        experimentingWith,
        lifestyle,
        occasions,
        desiredAppearance,
        summary,
      },

      update: {
        preferences,
        experimentingWith,
        lifestyle,
        occasions,
        desiredAppearance,
        summary,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Style profile saved successfully",
      styleProfile,
    });
  } catch (error) {
    console.error("Save style profile error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to save style profile",
    });
  }
}

export async function getStyleProfile(
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

    const styleProfile = await prisma.userStyleProfile.findUnique({
      where: {
        userId,
      },
    });

    if (!styleProfile) {
      return res.status(404).json({
        success: false,
        message: "Style profile not found",
      });
    }

    return res.status(200).json({
      success: true,
      styleProfile,
    });
  } catch (error) {
    console.error("Get style profile error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to get style profile",
    });
  }
}