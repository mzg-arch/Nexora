import { Router } from "express";
import { getDashboardSummary } from "../controllers/dashboardcontroller";
import { protectRoute } from "../middleware/authMiddleware";

const router = Router();

router.get("/summary", protectRoute, getDashboardSummary);

export default router;