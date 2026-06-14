import { Router } from "express";
import { protectRoute } from "../middleware/authMiddleware";
import {
  createAIMessage,
  deleteAIMessage,
  getAIMessageById,
  getAIMessages,
} from "../controllers/aiMessageController";

const router = Router();

router.get("/", protectRoute, getAIMessages);
router.get("/:id", protectRoute, getAIMessageById);
router.post("/", protectRoute, createAIMessage);
router.delete("/:id", protectRoute, deleteAIMessage);

export default router;