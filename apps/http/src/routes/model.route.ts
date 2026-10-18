import { Router } from "express";
import { getModels } from "../controllers/model.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", authMiddleware, getModels);

export default router;
