import { Request, Response, Router } from "express";
import { ensureAuthenticated } from "./middlewares/EnsureAuthenticated";
import { createEnrollController } from "./useCases/createEnroll";
import { createUserController } from "./useCases/createUser";

const router = Router();

router.post('/auth', (request: Request, response: Response) => createUserController.handle(request, response));
router.post('/enroll', ensureAuthenticated, (request: Request, response: Response) => createEnrollController.handle(request, response));

export { router };