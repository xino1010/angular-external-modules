import { Request, Response, Router } from 'express';

const router: Router = Router();

router.get('/modules', (req: Request, res: Response) => {
  res.send([
    {
      name: 'View A',
      route: 'viewA',
      metadata: 'public/library-metadata.json',
      // metadata: 'public/plugin-metadata.json',
      library: 'public/module-a.umd.js'
      // library: 'public/plugin-factory.umd.js'
    }
  ]);
});

export const ApiController: Router = router;
