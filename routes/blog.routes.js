import express from 'express';
import { verifyToken } from '../util/verify';
import { getAllBlogs } from '../controllers/blog.controller';

const router = express.Router();
router.get('/', getAllBlogs);
export default router;