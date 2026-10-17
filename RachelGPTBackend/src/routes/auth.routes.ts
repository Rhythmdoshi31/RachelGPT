import { Router } from "express";
import {
  signup,
  login,
  ensureUserProfile,
} from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/ensure-profile", authMiddleware, ensureUserProfile);

export default router;