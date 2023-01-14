import express from 'express';
import { addComment, getAllComments } from '../controllers/comment.controller.js';
import { verifyToken } from '../util/verify.js';

const router = express.Router();

router.get('/:blogid', getAllComments);
router.post('/:blogid',verifyToken, addComment);


export default router;