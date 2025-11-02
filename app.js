import express from 'express';
import 'dotenv/config';
import path from 'node:path';
import appRouter from './routes/index.js';
import messageRouter from './routes/messageRouter.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.set('views', path.join(import.meta.dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/', appRouter);
app.use('/new', messageRouter);


app.listen(PORT);