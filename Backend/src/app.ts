import express, { Application } from 'express';
import cors from 'cors';

const app: Application = express();

app.use(cors());
app.use(express.json());

app.get('/message', (req, res) => {
  res.json({ message: 'Hello from the Node server!' });
});

export default app;