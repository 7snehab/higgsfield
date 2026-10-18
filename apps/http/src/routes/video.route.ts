import { Router } from "express";
import {
  createVideo,
  getVideo,
  getVideos,
} from "../controllers/video.controllers";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.post("/createVideo", authMiddleware, createVideo);
router.get("/:videoId", authMiddleware, getVideo);
router.get("/getVideos", authMiddleware, getVideos);

export default router;
