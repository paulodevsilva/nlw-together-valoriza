import 'reflect-metadata';
import express from 'express';

import './database';

const port = process.env.PORT || 3000;

const app = express();

app.listen(port, () => console.log(`server is running in port ${port} 🚀🚀🚀`));
