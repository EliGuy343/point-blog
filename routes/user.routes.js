import express from 'express';
import {
  authUser,
  getAllUsers,
  login,
  signupUser
} from '../controllers/user.controller.js';
import { verifyToken } from '../util/verify.js';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/signup', signupUser);
router.post('/login', login);
router.get('/auth', verifyToken, authUser);
export default router;