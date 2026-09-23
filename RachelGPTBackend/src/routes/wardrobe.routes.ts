import { Router } from "express";
import {
  createWardrobeUploadUrl,
  createWardrobeUploadUrls,
  completeWardrobeUpload,
  completeWardrobeUploads,
  getWardrobe,
  getWardrobeItemById,
  updateWardrobeItem,
  deleteWardrobeItem,
  analyzeWardrobeItem,
  analyzeWardrobeBatch,
} from "../controllers/wardrobe.controller.js";

import { authMiddleware } from "../middleware/auth.js";

const router = Router();

router.post(
  "/upload-url",
  authMiddleware,
  createWardrobeUploadUrl
);

router.post(
  "/upload-urls",
  authMiddleware,
  createWardrobeUploadUrls
);

router.post(
  "/complete",
  authMiddleware,
  completeWardrobeUpload
);

router.post(
  "/complete-batch",
  authMiddleware,
  completeWardrobeUploads
);

router.get(
  "/",
  authMiddleware,
  getWardrobe
);

router.get(
  "/:id",
  authMiddleware,
  getWardrobeItemById
);

router.patch(
  "/:id",
  authMiddleware,
  updateWardrobeItem
);

router.delete(
  "/:id",
  authMiddleware,
  deleteWardrobeItem
);

router.post(
  "/:id/analyze",
  authMiddleware,
  analyzeWardrobeItem
);

 router.post(
  "/analyze-batch",
  authMiddleware,
  analyzeWardrobeBatch
);

export default router;