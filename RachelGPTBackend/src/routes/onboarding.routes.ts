import { Router } from "express";
import {
  saveStyleProfile,
  getStyleProfile,
} from "../controllers/onboarding.controller.js";
import { authMiddleware } from "../middleware/auth.js";

const router = Router();

router.post(
  "/style",
  authMiddleware,
  saveStyleProfile
);

router.get(
  "/style",
  authMiddleware,
  getStyleProfile
);

export default router;