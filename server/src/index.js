import dotenv from 'dotenv';
import express from './config/express';
dotenv.config();

const app = express();
app.listen(5050);