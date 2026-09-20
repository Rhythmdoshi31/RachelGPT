import { Router } from "express";
import { getPersonas, selectPersona, getActivePersona, } from "../controllers/persona.controller.js";
import { authMiddleware } from "../middleware/auth.js";
const router = Router();
router.get("/", authMiddleware, getPersonas);
router.post("/select", authMiddleware, selectPersona);
router.get("/active", authMiddleware, getActivePersona);
export default router;
//# sourceMappingURL=persona.routes.js.map