import { GenerateAccessTokenProvider } from "../../providers/GenerateAccessToken/GenerateTokenProvider";
import { GenerateRefreshTokenProvider } from "../../providers/GenerateRefreshToken/GenerateRefreshTokenProvider";
import { PostgresRefreshTokenRepository } from "../../repositories/PostgresRefreshTokenRepository";
import { PostgresUserrepository } from "../../repositories/PostgresUserRepository";
import { CreateUserController } from "./createUserController";
import { CreateUserUseCase } from "./createUserUseCase";

const postgresUserRepository = new PostgresUserrepository();
const postgresRefreshTokenrepository = new PostgresRefreshTokenRepository();

const generateAccessToken = new GenerateAccessTokenProvider();
const generateRefreshToken = new GenerateRefreshTokenProvider(postgresRefreshTokenrepository);
const createUserUseCase = new CreateUserUseCase(postgresUserRepository, generateAccessToken, generateRefreshToken);
export const createUserController = new CreateUserController(createUserUseCase);

