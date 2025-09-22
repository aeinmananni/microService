import { Router } from 'express';
import { hadelGetPostsControll, handelAddPosts } from '../controllers/posts.controller';

const router = Router();

router.get('/GET/All', hadelGetPostsControll);
router.post('/POST/Add', handelAddPosts);

export default router;
