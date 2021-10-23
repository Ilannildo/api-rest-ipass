import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserResquest } from "./createUserDTO";

export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository
  ) { }

  async execute(user: User): Promise<User> {
    const userAlreadyExists = await this.userRepository.findByUserId(user.uid);

    if (userAlreadyExists) {
      // Retornar o token de autenticação do usuário
      // Retornar o refresh token do usuário
      return userAlreadyExists;
    }

    const userCreated = await this.userRepository.save(user);
    if (!userCreated) {
      throw new Error('Não foi possível cadastrar');
    }

    return userCreated;
  }
};