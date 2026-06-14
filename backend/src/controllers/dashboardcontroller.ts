import { Response } from "express";
import prisma from "../config/prisma";
import { AuthRequest } from "../middleware/authMiddleware";

export async function getDashboardSummary(req: AuthRequest, res: Response) {
  try {
    if (!req.user?.id) {
      return res.status(401).json({
        message: "Not authorized",
        status: "error",
      });
    }

    const userId = req.user.id;

    const [
      totalClients,
      activeClients,
      totalProjects,
      activeProjects,
      pendingTasks,
      completedTasks,
      totalAIMessages,
      recentProjects,
      recentTasks,
      recentAIMessages,
    ] = await Promise.all([
      prisma.client.count({
        where: {
          userId,
        },
      }),

      prisma.client.count({
        where: {
          userId,
          status: "ACTIVE",
        },
      }),

      prisma.project.count({
        where: {
          userId,
        },
      }),

      prisma.project.count({
        where: {
          userId,
          status: "IN_PROGRESS",
        },
      }),

      prisma.task.count({
        where: {
          userId,
          status: {
            in: ["PENDING", "IN_PROGRESS", "IN_REVIEW"],
          },
        },
      }),

      prisma.task.count({
        where: {
          userId,
          status: "COMPLETED",
        },
      }),

      prisma.aIMessage.count({
        where: {
          userId,
        },
      }),

      prisma.project.findMany({
        where: {
          userId,
        },
        include: {
          client: {
            select: {
              id: true,
              name: true,
              company: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 5,
      }),

      prisma.task.findMany({
        where: {
          userId,
        },
        include: {
          client: {
            select: {
              id: true,
              name: true,
            },
          },
          project: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 5,
      }),

      prisma.aIMessage.findMany({
        where: {
          userId,
        },
        include: {
          client: {
            select: {
              id: true,
              name: true,
            },
          },
          project: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 5,
      }),
    ]);

    return res.json({
      message: "Dashboard summary loaded successfully",
      status: "success",
      summary: {
        totalClients,
        activeClients,
        totalProjects,
        activeProjects,
        pendingTasks,
        completedTasks,
        totalAIMessages,
      },
      recent: {
        projects: recentProjects,
        tasks: recentTasks,
        aiMessages: recentAIMessages,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to load dashboard summary",
      status: "error",
    });
  }
}