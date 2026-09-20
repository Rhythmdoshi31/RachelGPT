import "dotenv/config";
import express from "express";

import { prisma } from "./lib/prisma.js";
import {
  authMiddleware,
  AuthenticatedRequest,
} from "./middleware/auth.js";

import authRoutes from "./routes/auth.routes.js";
import onboardingRoutes from "./routes/onboarding.routes.js";
import personaRoutes from "./routes/persona.routes.js";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

// Auth routes
app.use("/api/auth", authRoutes);
app.use("/api/onboarding", onboardingRoutes);
app.use("/api/personas", personaRoutes);

// Health check
app.get("/", (_req, res) => {
  res.json({
    message: "Rachel backend is running",
  });
});

// Database test
app.get("/api/test-db", async (_req, res) => {
  try {
    const users = await prisma.user.findMany();

    res.json({
      success: true,
      message: "Database connection is working",
      users,
    });
  } catch (error) {
    console.error("Database error:", error);

    res.status(500).json({
      success: false,
      message: "Database connection failed",
    });
  }
});

// Current authenticated user
app.get(
  "/api/me",
  authMiddleware,
  async (req: AuthenticatedRequest, res) => {
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
      });

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User profile not found",
        });
      }

      return res.json({
        success: true,
        user,
      });
    } catch (error) {
      console.error("Get user error:", error);

      return res.status(500).json({
        success: false,
        message: "Failed to get user",
      });
    }
  }
);

app.listen(PORT, () => {
  console.log(`Rachel backend running on http://localhost:${PORT}`);
});