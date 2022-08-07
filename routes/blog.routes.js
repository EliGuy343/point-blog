import express from 'express';
import { verifyToken } from '../util/verify.js';
import { addBlog, getAllBlogs, updateBlog } from '../controllers/blog.controller.js';

const router = express.Router();
router.get('/', getAllBlogs);
router.post('/', verifyToken, addBlog);
router.put('/edit/:id', verifyToken, updateBlog);
export default router;