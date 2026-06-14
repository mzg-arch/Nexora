import { Response } from "express";
import prisma from "../config/prisma";
import { AuthRequest } from "../middleware/authMiddleware";

export async function getClients(req: AuthRequest, res: Response) {
  try {
    const clients = await prisma.client.findMany({
      where: {
        userId: req.user?.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.json({
      message: "Clients loaded successfully",
      status: "success",
      clients,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to load clients",
      status: "error",
    });
  }
}

export async function getClientById(req: AuthRequest, res: Response) {
  try {
    const id = req.params.id as string;

    const client = await prisma.client.findFirst({
      where: {
        id,
        userId: req.user?.id,
      },
      include: {
        projects: true,
        tasks: true,
        aiMessages: true,
      },
    });

    if (!client) {
      return res.status(404).json({
        message: "Client not found",
        status: "error",
      });
    }

    return res.json({
      message: "Client loaded successfully",
      status: "success",
      client,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to load client",
      status: "error",
    });
  }
}

export async function createClient(req: AuthRequest, res: Response) {
  try {
    const { name, email, phone, company, status, notes } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "Client name is required",
        status: "error",
      });
    }

    if (!req.user?.id) {
      return res.status(401).json({
        message: "Not authorized",
        status: "error",
      });
    }

    const client = await prisma.client.create({
      data: {
        name,
        email,
        phone,
        company,
        status: status || "LEAD",
        notes,
        userId: req.user.id,
      },
    });

    return res.status(201).json({
      message: "Client created successfully",
      status: "success",
      client,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create client",
      status: "error",
    });
  }
}

export async function updateClient(req: AuthRequest, res: Response) {
  try {
    const id = req.params.id as string;
    const { name, email, phone, company, status, notes } = req.body;

    const existingClient = await prisma.client.findFirst({
      where: {
        id,
        userId: req.user?.id,
      },
    });

    if (!existingClient) {
      return res.status(404).json({
        message: "Client not found",
        status: "error",
      });
    }

    const updatedClient = await prisma.client.update({
      where: {
        id,
      },
      data: {
        name,
        email,
        phone,
        company,
        status,
        notes,
      },
    });

    return res.json({
      message: "Client updated successfully",
      status: "success",
      client: updatedClient,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to update client",
      status: "error",
    });
  }
}

export async function deleteClient(req: AuthRequest, res: Response) {
  try {
    const id = req.params.id as string;

    const existingClient = await prisma.client.findFirst({
      where: {
        id,
        userId: req.user?.id,
      },
    });

    if (!existingClient) {
      return res.status(404).json({
        message: "Client not found",
        status: "error",
      });
    }

    await prisma.client.delete({
      where: {
        id,
      },
    });

    return res.json({
      message: "Client deleted successfully",
      status: "success",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to delete client",
      status: "error",
    });
  }
}