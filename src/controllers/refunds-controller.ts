import { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "@/database/prisma";
import { AppError } from "@/utils/AppError";

class RefundsController {
  async create(request: Request, response: Response) {}
}

export { RefundsController };
