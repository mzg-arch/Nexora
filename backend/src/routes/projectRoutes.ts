import { Router } from "express";
import { protectRoute } from "../middleware/authMiddleware";
import {
  createProject,
  deleteProject,
  getProjectById,
  getProjects,
  updateProject,
} from "../controllers/projectController";

const router = Router();

router.get("/", protectRoute, getProjects);
router.get("/:id", protectRoute, getProjectById);
router.post("/", protectRoute, createProject);
router.patch("/:id", protectRoute, updateProject);
router.delete("/:id", protectRoute, deleteProject);

export default router;