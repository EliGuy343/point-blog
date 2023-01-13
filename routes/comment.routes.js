import express from 'express';
import { addComment, getAllComments } from '../controllers/comment.controller';

router.get('/comments/:postid', getAllComments);
router.post('/comments/add', addComment);

const router = express.Router();

