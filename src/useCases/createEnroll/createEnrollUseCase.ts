import { Enroll } from "../../entities/Enroll";
import { IEnrollRepository } from "../../repositories/IEnrollRepository";
import { IUserRepository } from "../../repositories/IUserRepository";

export class CreateEnrollUseCase {
  constructor(
    private enrollRepository: IEnrollRepository,
    private userRepository: IUserRepository
  ) { }

  async execute(enroll: Enroll): Promise<boolean> {
    const userAlreadyExists = await this.userRepository.findByUserId(enroll.userId);
    if (!userAlreadyExists) {
      // Usuário ainda não se cadastrou
      throw new Error('user not registered');
    }
    
    const enrollAlreadyExistsByUserId = await this.enrollRepository.findByUserId(enroll.userId);
    if (enrollAlreadyExistsByUserId) {
      // Usuário já está matriculado
      throw new Error('user is enrolled');
    }

    const enrollCreated = await this.enrollRepository.save(enroll);
    if (!enrollCreated) {
      throw new Error('it was not possible to register enroll');
    }

    return true;
  }
}