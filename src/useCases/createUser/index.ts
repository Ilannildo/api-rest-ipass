import { PostgresUserrepository } from "../../repositories/PostgresUserRepository";
import { CreateUserController } from "./createUserController";
import { CreateUserUseCase } from "./createUserUseCase";

const postgresUserRepository = new PostgresUserrepository();
const createUserUseCase = new CreateUserUseCase(postgresUserRepository);
export const createUserController = new CreateUserController(createUserUseCase);

