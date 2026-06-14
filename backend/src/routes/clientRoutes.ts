import { Router } from "express";
import { protectRoute } from "../middleware/authMiddleware";
import {
  createClient,
  deleteClient,
  getClientById,
  getClients,
  updateClient,
} from "../controllers/clientController";

const router = Router();

router.get("/", protectRoute, getClients);
router.get("/:id", protectRoute, getClientById);
router.post("/", protectRoute, createClient);
router.patch("/:id", protectRoute, updateClient);
router.delete("/:id", protectRoute, deleteClient);

export default router;