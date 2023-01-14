import express from 'express';
import { addComment, getAllComments } from '../controllers/comment.controller';

router.get('/:blogid', getAllComments);
router.post('/add', addComment);

const router = express.Router();

export default router;