import { RefreshToken } from "../../entities/RefreshToken";
import { IRefreshTokenRepository } from "../../repositories/IRefreshTokenRepository";


export class GenerateRefreshTokenProvider {
  constructor(
    private refreshTokenRepository: IRefreshTokenRepository
  ) {}
  async execute(userId: string):Promise<RefreshToken> {

    const tokenAlreadyExists = await this.refreshTokenRepository.findByUserId(userId);

    if (tokenAlreadyExists) {
      // throw new Error('Usuário já logado');
      await this.refreshTokenRepository.removeAllByUserId(userId);
      const generateRefreshToken = this.refreshTokenRepository.save(userId);
      return generateRefreshToken;
    }

    const generateRefreshToken = this.refreshTokenRepository.save(userId);

    return generateRefreshToken;
  }
}