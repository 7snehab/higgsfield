import { Router } from "express";
import {
  createAvatar,
  getAvatar,
  getAvatars,
} from "../controllers/avatar.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.post("/createAvatar", authMiddleware, createAvatar);
router.get("/:avatarId", authMiddleware, getAvatar);
router.get("/getavatars", authMiddleware, getAvatars);

export default router;
