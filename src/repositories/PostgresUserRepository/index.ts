import { User } from "../../entities/User";
import { client } from "../../prisma/client";
import { IUserRepository } from "../IUserRepository";

export class PostgresUserrepository implements IUserRepository{
  async findByUserId(userId: string): Promise<User> {
    const user = await client.user.findFirst({
      where: {
        sub: userId
      }
    });

    return user;
  }

  async save(user: User): Promise<User> {
    const userCreated = await client.user.create({
      data: user
    });
    
    return userCreated;
  }
}