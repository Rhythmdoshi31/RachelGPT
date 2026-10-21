import { Router } from "express";
import { saveStyleProfile, getStyleProfile, getOnboardingStatus, updateOnboardingProgress, completeOnboarding, } from "../controllers/onboarding.controller.js";
import { authMiddleware } from "../middleware/auth.js";
const router = Router();
router.post("/style", authMiddleware, saveStyleProfile);
router.get("/style", authMiddleware, getStyleProfile);
router.get("/status", authMiddleware, getOnboardingStatus);
router.patch("/progress", authMiddleware, updateOnboardingProgress);
router.post("/complete", authMiddleware, completeOnboarding);
export default router;
//# sourceMappingURL=onboarding.routes.js.map