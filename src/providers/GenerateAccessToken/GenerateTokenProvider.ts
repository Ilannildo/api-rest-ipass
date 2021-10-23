import { sign } from "jsonwebtoken";
import {APPLICATION_CREDENTIALS} from '../../config/auth.json';

export class GenerateAccessTokenProvider {
  execute(userId: string) {
    const token = sign({}, APPLICATION_CREDENTIALS, {
      subject: userId,
      expiresIn: "60s",
    });

    return token;
  }
}