import express from 'express';
import compression from 'compression';
import cors from 'cors';
import COMMENTS from '../routes/comments.routes';
const app = express();

app.use(express.json());
app.use(compression());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/api/comments', COMMENTS);

export default app;
