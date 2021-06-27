import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

import './database';
import { routes } from './routes';

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(routes);
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({ error: err.message });
    }

    return response
      .status(500)
      .json({ status: 'error', message: 'Internal Server error' });
  }
);

app.listen(port, () => console.log(`server is running in port ${port} 🚀🚀🚀`));
