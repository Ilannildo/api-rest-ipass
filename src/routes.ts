import { Request, Response, Router } from "express";
import { ensureAuthenticated } from "./middlewares/EnsureAuthenticated";
import { createEnrollController } from "./useCases/createEnroll";
import { createUserController } from "./useCases/createUser";

const router = Router();

router.post('/auth', (request: Request, response: Response) => createUserController.handle(request, response));
router.post('/enroll', ensureAuthenticated, (request: Request, response: Response) => createEnrollController.handle(request, response));
router.get('/notes', ensureAuthenticated, (request: Request, response: Response) => {
  return response.status(200).json({
    message: 'Notes',
    data: [
      {
        _id: '1',
        title: 'Primeira nota',
        text: 'Loren ipsun',
      },
      {
        _id: '2',
        title: 'Segunda nota',
        text: 'Loren ipsun',
      },
      {
        _id: '3',
        title: 'Terceira nota',
        text: 'Loren ipsun',
      },
      {
        _id: '4',
        title: 'Quarta nota',
        text: 'Loren ipsun',
      },
      {
        _id: '5',
        title: 'Quinta nota',
        text: 'Loren ipsun',
      },
    ],
  })
});

export { router };