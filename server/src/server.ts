import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// https://www.youtube.com/watch?v=9B612wK056c
// porta padrão é 80 (não aparece no URL)
app.listen(3333);