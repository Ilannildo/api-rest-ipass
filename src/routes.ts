import { Request, Response, Router } from "express";
import { createUserController } from "./useCases/createUser";

const router = Router();

router.post('/auth', (request: Request, response: Response) => createUserController.handle(request, response));

export { router };