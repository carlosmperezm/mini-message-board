import express from 'express';
import 'dotenv/config';
import path from 'node:path';
import appRouter from './routes/index.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.set('views', path.join(import.meta.dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', appRouter);


app.listen(PORT);