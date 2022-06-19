import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

app.use(cors(), express.json({limit: '1mb'}));

const PORT = process.env.PORT || 4000;

app.get('/', (req: Request, res: Response) => {
  res.send('hello');
});

app.post('/data', (req: Request, res: Response) => {
  
  console.log(req.body);

  res.send(req.body)
});

app.listen(PORT, () => console.log('Running on Port 4000'));
