import { Router } from "express";
import { protectRoute } from "../middleware/authMiddleware";
import {
  createTask,
  deleteTask,
  getTaskById,
  getTasks,
  updateTask,
} from "../controllers/taskController";

const router = Router();

router.get("/", protectRoute, getTasks);
router.get("/:id", protectRoute, getTaskById);
router.post("/", protectRoute, createTask);
router.patch("/:id", protectRoute, updateTask);
router.delete("/:id", protectRoute, deleteTask);

export default router;