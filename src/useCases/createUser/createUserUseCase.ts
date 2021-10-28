import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";
import { GenerateAccessTokenProvider } from '../../providers/GenerateAccessToken/GenerateTokenProvider';
import { GenerateRefreshTokenProvider } from "../../providers/GenerateRefreshToken/GenerateRefreshTokenProvider";
import { ICreateUserResponse } from "./createUserDTO";

export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private generateAccessToken: GenerateAccessTokenProvider,
    private generateRefreshToken: GenerateRefreshTokenProvider,
  ) { }

  async execute(user: User): Promise<ICreateUserResponse> {
    const userAlreadyExists = await this.userRepository.findByUserId(user.sub);
    console.log('Passando aqui 1', userAlreadyExists);

    if (userAlreadyExists) {
      // Retornar o token de autenticação do usuário
      const accessToken = this.generateAccessToken.execute(userAlreadyExists.uid);
      const refreshToken = await this.generateRefreshToken.execute(userAlreadyExists.uid);
      // Retornar o refresh token do usuário
      return { isCreated: false, user: userAlreadyExists, accessToken, refreshToken };
    }
    const userCreated = await this.userRepository.save(user);
    if (!userCreated) {
      throw new Error('Não foi possível cadastrar');
    }

    const accessToken = this.generateAccessToken.execute(userCreated.uid);
    const refreshToken = await this.generateRefreshToken.execute(userCreated.uid);
    // Retornar o refresh token do usuário
    return { isCreated: true, user: userCreated, accessToken, refreshToken };
  }
};