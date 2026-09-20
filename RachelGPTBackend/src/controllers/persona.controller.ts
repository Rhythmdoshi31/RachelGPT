import { Response } from "express";
import { prisma } from "../lib/prisma.js";
import { AuthenticatedRequest } from "../middleware/auth.js";

export async function getPersonas(
  _req: AuthenticatedRequest,
  res: Response
) {
  try {
    const personas = await prisma.persona.findMany({
      orderBy: {
        name: "asc",
      },
    });

    return res.status(200).json({
      success: true,
      personas,
    });
  } catch (error) {
    console.error("Get personas error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to get personas",
    });
  }
}

export async function selectPersona(
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

    const { personaId } = req.body;

    if (!personaId) {
      return res.status(400).json({
        success: false,
        message: "Persona ID is required",
      });
    }

    const persona = await prisma.persona.findUnique({
      where: {
        id: personaId,
      },
    });

    if (!persona) {
      return res.status(404).json({
        success: false,
        message: "Persona not found",
      });
    }

    await prisma.userPersona.updateMany({
      where: {
        userId,
        isActive: true,
      },
      data: {
        isActive: false,
      },
    });

    const userPersona = await prisma.userPersona.upsert({
      where: {
        userId_personaId: {
          userId,
          personaId,
        },
      },
      create: {
        userId,
        personaId,
        isActive: true,
      },
      update: {
        isActive: true,
        selectedAt: new Date(),
      },
      include: {
        persona: true,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Persona selected successfully",
      userPersona,
    });
  } catch (error) {
    console.error("Select persona error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to select persona",
    });
  }
}

export async function getActivePersona(
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

    const userPersona = await prisma.userPersona.findFirst({
      where: {
        userId,
        isActive: true,
      },
      include: {
        persona: true,
      },
    });

    if (!userPersona) {
      return res.status(404).json({
        success: false,
        message: "No active persona selected",
      });
    }

    return res.status(200).json({
      success: true,
      userPersona,
    });
  } catch (error) {
    console.error("Get active persona error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to get active persona",
    });
  }
}