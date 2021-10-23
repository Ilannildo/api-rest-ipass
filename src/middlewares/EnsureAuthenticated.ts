import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import {APPLICATION_CREDENTIALS} from '../config/auth.json';

export function ensureAuthenticated(resquest: Request, response: Response, next: NextFunction) {
  const authToken = resquest.headers.authorization;

  if (!authToken) {
    return response.status(401).json({
      message: "Token is missing"
    });
  }

  const [, token] = authToken.split(' ');
  try {
    const payload = verify(token, APPLICATION_CREDENTIALS);
    console.log('Payload 2 =>', payload);
    resquest.body.userId = payload.sub;
    return next();
  } catch (error) {
    return response.status(400).json({
      message: error.message || 'Unexpected error'
    });
  }
}