import { RefreshToken } from "../../entities/RefreshToken";
import { User } from "../../entities/User";

export type ICreateUserResponse = {
  user: User;
  accessToken: string;
  refreshToken: RefreshToken;
};