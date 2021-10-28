import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuthenticated(resquest: Request, response: Response, next: NextFunction) {
  const authToken = resquest.headers.authorization;

  if (!authToken) {
    return response.status(401).json({
      message: "Token is missing"
    });
  }

  const [, token] = authToken.split(' ');
  try {
    const payload = verify(token, process.env.APPLICATION_CREDENTIALS);
    resquest.body.userId = payload.sub;
    return next();
  } catch (error) {
    return response.status(400).json({
      message: error.message || 'Unexpected error'
    });
  }
}