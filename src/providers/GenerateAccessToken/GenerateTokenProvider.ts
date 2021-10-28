import { sign } from "jsonwebtoken";

export class GenerateAccessTokenProvider {
  execute(userId: string) {
    const token = sign({}, process.env.APPLICATION_CREDENTIALS, {
      subject: userId,
      expiresIn: "60s",
    });

    return token;
  }
}