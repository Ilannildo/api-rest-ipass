import { User } from "../entities/User";
export type IUserRepository  = {
  findByEmail?(email: string): Promise<User>;
  findByName?(name: string): Promise<User>;
  findByUserId(userId: string): Promise<User>;
  save?(user: User): Promise<User>;
};