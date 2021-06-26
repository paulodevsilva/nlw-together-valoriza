import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.listen(port, () => console.log(`server is running in port ${port} 🚀🚀🚀`));
