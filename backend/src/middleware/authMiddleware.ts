import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import prisma from "../config/prisma";

interface TokenPayload {
  userId: string;
}

export interface AuthRequest extends Request {
  user?: {
    id: string;
    name: string;
    email: string;
    plan: string;
  };
}

export async function protectRoute(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Not authorized. No token provided.",
        status: "error",
      });
    }

    const token = authHeader.split(" ")[1];
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      return res.status(500).json({
        message: "JWT secret is missing on server",
        status: "error",
      });
    }

    const decoded = jwt.verify(token, secret) as TokenPayload;

    const user = await prisma.user.findUnique({
      where: {
        id: decoded.userId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        plan: true,
      },
    });

    if (!user) {
      return res.status(401).json({
        message: "Not authorized. User not found.",
        status: "error",
      });
    }

    req.user = {
      id: user.id,
      name: user.name,
      email: user.email,
      plan: user.plan,
    };

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Not authorized. Invalid token.",
      status: "error",
    });
  }
}