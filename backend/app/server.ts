import * as express from 'express';
import { ApiController } from './controllers/index';
import * as path from 'path';

const app: express.Application = express();
const port: number = Number(process.env.PORT) || 5000;

app.use('/public', express.static(path.join(__dirname + '/..', 'public')));
app.use('/node_modules', express.static(path.join(__dirname + '/..', 'node_modules')));

app.use('/api', ApiController);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
