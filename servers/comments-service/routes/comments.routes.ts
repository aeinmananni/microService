import { Router } from 'express';
import { hadelGetCommentsControll } from '../controllers/comments.controller';
const router = Router();

router.get('/GET/All', hadelGetCommentsControll);

export default router;
