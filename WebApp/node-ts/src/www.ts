import 'source-map-support/register';
import App from './App';
import express from 'express';

const port: number = Number(process.env.PORT) || 3100;
const app: express.Application = new App().app;

app.listen(port, () => console.log(`Express server listening as ${port}`))
.on('error', err => console.error(err));
