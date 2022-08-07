import express from 'express';
import { verifyToken } from '../util/verify.js';
import {
  addBlog,
  deleteBlog,
  getAllBlogs,
  getBlog,
  getBlogsByUser,
  updateBlog
} from '../controllers/blog.controller.js';

const router = express.Router();
router.get('/', getAllBlogs);
router.post('/', verifyToken, addBlog);
router.put('/edit/:id', verifyToken, updateBlog);
router.get('/:id', getBlog);
router.get('/user/:id', getBlogsByUser);
router.delete('/delete/:id', verifyToken, deleteBlog);
export default router;