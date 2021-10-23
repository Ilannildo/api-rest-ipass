import { PostgresRefreshTokenRepository } from "../../repositories/implementations/PostgresRefreshTokenRepository";
import { GenerateRefreshTokenProvider } from "./GenerateRefreshTokenProvider";

const postgresRefreshTokenRepository = new PostgresRefreshTokenRepository();
const generateRefreshTokenProvider = new GenerateRefreshTokenProvider(
  postgresRefreshTokenRepository
);

export { generateRefreshTokenProvider }