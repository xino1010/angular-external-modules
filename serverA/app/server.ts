import * as express from 'express';
import * as path from 'path';
import { ApiController } from './controllers/index';

const app: express.Application = express();
const port: number = Number(process.env.PORT) || 5001;

app.use('/public', express.static(path.join(__dirname + '/..', 'public')));
app.use('/node_modules', express.static(path.join(__dirname + '/..', 'node_modules')));

app.use('/api', ApiController);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
