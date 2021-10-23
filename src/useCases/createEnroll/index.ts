import { PostgresEnrollRepository } from "../../repositories/PostgresEnrollRepository";
import { PostgresUserrepository } from "../../repositories/PostgresUserRepository";
import { CreateEnrollController } from "./createEnrollController";
import { CreateEnrollUseCase } from "./createEnrollUseCase";

const postgresEnrollRepository = new PostgresEnrollRepository();
const postgresUserRepository = new PostgresUserrepository();
const createEnrollUseCase = new CreateEnrollUseCase(postgresEnrollRepository, postgresUserRepository);
export const createEnrollController = new CreateEnrollController(createEnrollUseCase);