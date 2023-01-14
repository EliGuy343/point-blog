import express from 'express';
import { addComment, getAllComments } from '../controllers/comment.controller.js';

const router = express.Router();

router.get('/:blogid', getAllComments);
router.post('/:blogid', addComment);


export default router;