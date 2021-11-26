import express from 'express';
import { router } from './routes';
import './database/postgres/postgresConnection';
import "dotenv";

const app = express();

app.use(express.json());
app.use(router);

export {app}