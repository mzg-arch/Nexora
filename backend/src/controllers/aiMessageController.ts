import { Response } from "express";
import prisma from "../config/prisma";
import { AuthRequest } from "../middleware/authMiddleware";

function generateFakeAIMessage(type: string, prompt: string) {
  if (type === "PROJECT_UPDATE") {
    return `Hi there,

I wanted to send a quick project update. We have made progress on the current work and are moving toward the next delivery stage.

Key points:
${prompt}

Please let me know if you have any questions, changes, or approvals before we continue.

Best regards`;
  }

  if (type === "PAYMENT_REMINDER") {
    return `Hi there,

I hope you are doing well. I wanted to send a friendly reminder regarding the pending payment connected to our work.

Key points:
${prompt}

Please let me know if you need any details from my side.

Best regards`;
  }

  if (type === "MEETING_SUMMARY") {
    return `Hi there,

Here is a quick summary of our recent meeting and the next steps.

Summary:
${prompt}

Please let me know if I missed anything or if you want to adjust the next steps.

Best regards`;
  }

  return `Hi there,

Just following up regarding our recent conversation.

Key points:
${prompt}

Please let me know your thoughts when you get a chance.

Best regards`;
}

export async function getAIMessages(req: AuthRequest, res: Response) {
  try {
    const aiMessages = await prisma.aIMessage.findMany({
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
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.json({
      message: "AI messages loaded successfully",
      status: "success",
      aiMessages,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to load AI messages",
      status: "error",
    });
  }
}

export async function getAIMessageById(req: AuthRequest, res: Response) {
  try {
    const id = req.params.id as string;

    const aiMessage = await prisma.aIMessage.findFirst({
      where: {
        id,
        userId: req.user?.id,
      },
      include: {
        client: true,
        project: true,
      },
    });

    if (!aiMessage) {
      return res.status(404).json({
        message: "AI message not found",
        status: "error",
      });
    }

    return res.json({
      message: "AI message loaded successfully",
      status: "success",
      aiMessage,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to load AI message",
      status: "error",
    });
  }
}

export async function createAIMessage(req: AuthRequest, res: Response) {
  try {
    const { type, prompt, clientId, projectId } = req.body;

    if (!type || !prompt) {
      return res.status(400).json({
        message: "Message type and prompt are required",
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

    const output = generateFakeAIMessage(type, prompt);

    const aiMessage = await prisma.aIMessage.create({
      data: {
        type,
        prompt,
        output,
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
      message: "AI message generated successfully",
      status: "success",
      aiMessage,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to generate AI message",
      status: "error",
    });
  }
}

export async function deleteAIMessage(req: AuthRequest, res: Response) {
  try {
    const id = req.params.id as string;

    const existingMessage = await prisma.aIMessage.findFirst({
      where: {
        id,
        userId: req.user?.id,
      },
    });

    if (!existingMessage) {
      return res.status(404).json({
        message: "AI message not found",
        status: "error",
      });
    }

    await prisma.aIMessage.delete({
      where: {
        id,
      },
    });

    return res.json({
      message: "AI message deleted successfully",
      status: "success",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to delete AI message",
      status: "error",
    });
  }
}