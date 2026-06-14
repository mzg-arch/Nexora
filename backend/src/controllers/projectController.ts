import { Response } from "express";
import prisma from "../config/prisma";
import { AuthRequest } from "../middleware/authMiddleware";

export async function getProjects(req: AuthRequest, res: Response) {
  try {
    const projects = await prisma.project.findMany({
      where: {
        userId: req.user?.id,
      },
      include: {
        client: {
          select: {
            id: true,
            name: true,
            company: true,
          },
        },
        tasks: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.json({
      message: "Projects loaded successfully",
      status: "success",
      projects,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to load projects",
      status: "error",
    });
  }
}

export async function getProjectById(req: AuthRequest, res: Response) {
  try {
    const id = req.params.id as string;

    const project = await prisma.project.findFirst({
      where: {
        id,
        userId: req.user?.id,
      },
      include: {
        client: true,
        tasks: true,
        aiMessages: true,
      },
    });

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
        status: "error",
      });
    }

    return res.json({
      message: "Project loaded successfully",
      status: "success",
      project,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to load project",
      status: "error",
    });
  }
}

export async function createProject(req: AuthRequest, res: Response) {
  try {
    const { name, description, status, progress, deadline, clientId } = req.body;

    if (!name || !clientId) {
      return res.status(400).json({
        message: "Project name and clientId are required",
        status: "error",
      });
    }

    if (!req.user?.id) {
      return res.status(401).json({
        message: "Not authorized",
        status: "error",
      });
    }

    const client = await prisma.client.findFirst({
      where: {
        id: clientId,
        userId: req.user.id,
      },
    });

    if (!client) {
      return res.status(404).json({
        message: "Client not found",
        status: "error",
      });
    }

    const project = await prisma.project.create({
      data: {
        name,
        description,
        status: status || "PLANNING",
        progress: progress || 0,
        deadline: deadline ? new Date(deadline) : null,
        clientId,
        userId: req.user.id,
      },
      include: {
        client: true,
      },
    });

    return res.status(201).json({
      message: "Project created successfully",
      status: "success",
      project,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create project",
      status: "error",
    });
  }
}

export async function updateProject(req: AuthRequest, res: Response) {
  try {
    const id = req.params.id as string;
    const { name, description, status, progress, deadline } = req.body;

    const existingProject = await prisma.project.findFirst({
      where: {
        id,
        userId: req.user?.id,
      },
    });

    if (!existingProject) {
      return res.status(404).json({
        message: "Project not found",
        status: "error",
      });
    }

    const updatedProject = await prisma.project.update({
      where: {
        id,
      },
      data: {
        name,
        description,
        status,
        progress,
        deadline: deadline ? new Date(deadline) : undefined,
      },
      include: {
        client: true,
        tasks: true,
      },
    });

    return res.json({
      message: "Project updated successfully",
      status: "success",
      project: updatedProject,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to update project",
      status: "error",
    });
  }
}

export async function deleteProject(req: AuthRequest, res: Response) {
  try {
    const id = req.params.id as string;

    const existingProject = await prisma.project.findFirst({
      where: {
        id,
        userId: req.user?.id,
      },
    });

    if (!existingProject) {
      return res.status(404).json({
        message: "Project not found",
        status: "error",
      });
    }

    await prisma.project.delete({
      where: {
        id,
      },
    });

    return res.json({
      message: "Project deleted successfully",
      status: "success",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to delete project",
      status: "error",
    });
  }
}