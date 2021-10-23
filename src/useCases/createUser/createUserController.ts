import { Request, Response } from "express";
import { OAuth2Client } from "google-auth-library";
import { CreateUserUseCase } from "./createUserUseCase";
import { GOOGLE_APPLICATION_CREDENTIALS } from '../../config/auth.json';

export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { idToken } = request.body;
    try {
      const clientGoogle = new OAuth2Client(GOOGLE_APPLICATION_CREDENTIALS);
      const ticket = await clientGoogle.verifyIdToken({
        idToken: idToken,
        audience: GOOGLE_APPLICATION_CREDENTIALS
      });
      const payload = ticket.getPayload();
      console.log('Payload =>',payload);


      const user = await this.createUserUseCase.execute({
        sub: payload.sub,
        name: payload.name,
        email: payload.email,
        familyName: payload.family_name,
        givenName: payload.given_name,
        active: payload.email_verified,
        photo: payload.picture,
      });
      return response.status(200).json({
        message: 'Isso é um teste',
        data: user,
      })
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error'
      });
    }
  }
}