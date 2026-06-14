import { Response } from "express";
import prisma from "../config/prisma";
import { AuthRequest } from "../middleware/authMiddleware";

export async function getTasks(req: AuthRequest, res: Response) {
  try {
    const tasks = await prisma.task.findMany({
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
        project: {
          select: {
            id: true,
            name: true,
            status: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.json({
      message: "Tasks loaded successfully",
      status: "success",
      tasks,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to load tasks",
      status: "error",
    });
  }
}

export async function getTaskById(req: AuthRequest, res: Response) {
  try {
    const id = req.params.id as string;

    const task = await prisma.task.findFirst({
      where: {
        id,
        userId: req.user?.id,
      },
      include: {
        client: true,
        project: true,
      },
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
        status: "error",
      });
    }

    return res.json({
      message: "Task loaded successfully",
      status: "success",
      task,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to load task",
      status: "error",
    });
  }
}

export async function createTask(req: AuthRequest, res: Response) {
  try {
    const {
      title,
      description,
      status,
      priority,
      dueDate,
      clientId,
      projectId,
    } = req.body;

    if (!title) {
      return res.status(400).json({
        message: "Task title is required",
        status: "error",
      });
    }

    if (!req.user?.id) {
      return res.status(401).json({
        message: "Not authorized",
        status: "error",
      });
    }

    if (clientId) {
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
    }

    if (projectId) {
      const project = await prisma.project.findFirst({
        where: {
          id: projectId,
          userId: req.user.id,
        },
      });

      if (!project) {
        return res.status(404).json({
          message: "Project not found",
          status: "error",
        });
      }
    }

    const task = await prisma.task.create({
      data: {
        title,
        description,
        status: status || "PENDING",
        priority: priority || "MEDIUM",
        dueDate: dueDate ? new Date(dueDate) : null,
        clientId: clientId || null,
        projectId: projectId || null,
        userId: req.user.id,
      },
      include: {
        client: true,
        project: true,
      },
    });

    return res.status(201).json({
      message: "Task created successfully",
      status: "success",
      task,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create task",
      status: "error",
    });
  }
}

export async function updateTask(req: AuthRequest, res: Response) {
  try {
    const id = req.params.id as string;

    const {
      title,
      description,
      status,
      priority,
      dueDate,
      clientId,
      projectId,
    } = req.body;

    const existingTask = await prisma.task.findFirst({
      where: {
        id,
        userId: req.user?.id,
      },
    });

    if (!existingTask) {
      return res.status(404).json({
        message: "Task not found",
        status: "error",
      });
    }

    const updatedTask = await prisma.task.update({
      where: {
        id,
      },
      data: {
        title,
        description,
        status,
        priority,
        dueDate: dueDate ? new Date(dueDate) : undefined,
        clientId,
        projectId,
      },
      include: {
        client: true,
        project: true,
      },
    });

    return res.json({
      message: "Task updated successfully",
      status: "success",
      task: updatedTask,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to update task",
      status: "error",
    });
  }
}

export async function deleteTask(req: AuthRequest, res: Response) {
  try {
    const id = req.params.id as string;

    const existingTask = await prisma.task.findFirst({
      where: {
        id,
        userId: req.user?.id,
      },
    });

    if (!existingTask) {
      return res.status(404).json({
        message: "Task not found",
        status: "error",
      });
    }

    await prisma.task.delete({
      where: {
        id,
      },
    });

    return res.json({
      message: "Task deleted successfully",
      status: "success",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to delete task",
      status: "error",
    });
  }
}