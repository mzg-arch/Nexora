import { Router } from "express";
import { protectRoute, AuthRequest } from "../middleware/authMiddleware";

const router = Router();

router.get("/me", protectRoute, (req: AuthRequest, res) => {
  res.json({
    message: "User profile loaded successfully",
    status: "success",
    user: req.user,
  });
});

export default router;