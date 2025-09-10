import { Router } from 'express';
import { hadelGetPostsControll } from '../controllers/posts.controller';

const router = Router();

router.get('/GET/All', hadelGetPostsControll);

export default router;
