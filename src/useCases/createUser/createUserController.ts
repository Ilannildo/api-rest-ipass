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
      const userId = payload.sub;
      console.log('Payload =>',payload);

  // sub: '115001518569448690655',
  // email: 'ilannildoviana12@gmail.com',
  // email_verified: true,
  // name: 'Ilannildo Viana',
  // picture: 'https://lh3.googleusercontent.com/a-/AOh14GgYz8s1V7dCP0HPHDr_U4pPqigqDUZO73ao4cLz1w=s96-c',
  // given_name: 'Ilannildo',
  // family_name: 'Viana',


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