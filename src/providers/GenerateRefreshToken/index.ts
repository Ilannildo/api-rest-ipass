import { PostgresRefreshTokenRepository } from "../../repositories/PostgresRefreshTokenRepository";
import { GenerateRefreshTokenProvider } from "./GenerateRefreshTokenProvider";

const postgresRefreshTokenRepository = new PostgresRefreshTokenRepository();
const generateRefreshTokenProvider = new GenerateRefreshTokenProvider(
  postgresRefreshTokenRepository
);

export { generateRefreshTokenProvider }