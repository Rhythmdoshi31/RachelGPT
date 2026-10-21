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

export async function getOnboardingStatus(
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

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        onboardingCompleted: true,
        onboardingStep: true,
        onboardingCompletedAt: true,
      },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      onboardingCompleted: user.onboardingCompleted,
      onboardingStep: user.onboardingStep,
      onboardingCompletedAt: user.onboardingCompletedAt,
    });
  } catch (error) {
    console.error("Get onboarding status error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to get onboarding status",
    });
  }
}

export async function updateOnboardingProgress(
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

    const { onboardingStep, selectedStylist } = req.body;

    if (
      !Number.isInteger(onboardingStep) ||
      onboardingStep < 1 ||
      onboardingStep > 4
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid onboarding step",
      });
    }

    if (
      selectedStylist !== undefined &&
      !["Rachel", "KJay"].includes(selectedStylist)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid stylist selection",
      });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { onboardingCompleted: true },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.onboardingCompleted) {
      return res.status(409).json({
        success: false,
        message: "Onboarding has already been completed",
      });
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        onboardingStep,
      },
      select: {
        onboardingCompleted: true,
        onboardingStep: true,
        onboardingCompletedAt: true,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Onboarding progress saved",
      ...updatedUser,
    });
  } catch (error) {
    console.error("Update onboarding progress error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update onboarding progress",
    });
  }
}


export async function completeOnboarding(
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

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        onboardingCompleted: true,
        onboardingCompletedAt: true,
      },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.onboardingCompleted) {
      return res.status(200).json({
        success: true,
        message: "Onboarding is already completed",
        onboardingCompleted: true,
        onboardingCompletedAt: user.onboardingCompletedAt,
      });
    }

    const wardrobeCount = await prisma.wardrobeItem.count({
      where: {
        userId,
        isArchived: false,
      },
    });

    if (wardrobeCount === 0) {
      return res.status(400).json({
        success: false,
        message: "Please add at least one wardrobe item before continuing.",
      });
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        onboardingCompleted: true,
        onboardingCompletedAt: new Date(),
        onboardingStep: 4,
      },
      select: {
        onboardingCompleted: true,
        onboardingStep: true,
        onboardingCompletedAt: true,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Onboarding completed successfully",
      ...updatedUser,
    });
  } catch (error) {
    console.error("Complete onboarding error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to complete onboarding",
    });
  }
}
