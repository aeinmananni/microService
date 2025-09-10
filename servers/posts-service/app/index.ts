import express from 'express';
import compression from 'compression';
import cors from 'cors';
import POSTS from '../routes/posts.routes';
const app = express();

app.use(express.json());
app.use(compression());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/api/posts', POSTS);

export default app;
