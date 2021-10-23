import dayjs from "dayjs";
import { RefreshToken } from "../../entities/RefreshToken";
import { client } from "../../prisma/client";
import { IRefreshTokenRepository } from "../IRefreshTokenRepository";

export class PostgresRefreshTokenRepository implements IRefreshTokenRepository {
  async findByUserId(userId: string): Promise<RefreshToken> {
    const tokenAlreadyExists = await client.refreshToken.findFirst({
      where: {
        userId,
      }
    });

    return tokenAlreadyExists;
  }

  async save(userId: string): Promise<RefreshToken> {
    const expiresIn = dayjs().add(15, 'second').unix();

    const generateRefreshToken = await client.refreshToken.create({
      data: {
        userId,
        expiresIn
      }
    });

    return generateRefreshToken;
  }

  async findById(refreshTokenId: string): Promise<RefreshToken> {
    const tokenAlreadyExists = await client.refreshToken.findFirst({
      where: {
        id: refreshTokenId
      }
    });

    return tokenAlreadyExists;
  }

  async removeAllByUserId(userId: string): Promise<void> {
    await client.refreshToken.deleteMany({
      where: {
        userId
      },
    });
  }
}