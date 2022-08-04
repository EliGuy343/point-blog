import express from 'express';
import {getAllUsers, signupUser} from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/signup', signupUser);
export default router;