import { NextFunction, Request, Response } from "express";
import { CreateEnrollUseCase } from "./createEnrollUseCase";

export class CreateEnrollController {
  constructor(
    private createdEnrollUseCase: CreateEnrollUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      publicKey,
      userId
    } = request.body;

    try {
      const enroll = await this.createdEnrollUseCase.execute({
        publicKey: publicKey,
        userId: userId
      });

      return response.status(201).json({
        message: 'Matriculado com sucesso'
      });
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error'
      });
    }
  }
}