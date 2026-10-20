import { Router } from "express";
import { getAvatar, saveAvatar, } from "../controllers/avatar.controller.js";
import { authMiddleware } from "../middleware/auth.js";
const router = Router();
router.get("/", authMiddleware, getAvatar);
router.put("/", authMiddleware, saveAvatar);
export default router;
//# sourceMappingURL=avatar.routes.js.map