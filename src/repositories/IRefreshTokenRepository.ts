import { RefreshToken } from "../entities/RefreshToken";

export interface IRefreshTokenRepository {
  findById(refreshTokenId: string): Promise<RefreshToken>;
  findByUserId(userId: string): Promise<RefreshToken>;
  save(userId: string): Promise<RefreshToken>;
  removeAllByUserId(userId: string): Promise<void>;
}