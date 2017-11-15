import { Request, Response, Router } from 'express';

const router: Router = Router();

router.get('/servers', (req: Request, res: Response) => {
  res.send([
    {
      name: 'Server A',
      url: 'http://localhost:5001/',
      urlModules: 'http://localhost:5001/api/modules',
    },
    // {
    //   name: 'Server B',
    //   url: 'http://localhost:5002/',
    // },
    // {
    //   name: 'Server C',
    //   url: 'http://localhost:5003/',
    // },
  ]);
});

export const ApiController: Router = router;
