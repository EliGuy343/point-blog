import express from 'express';
import upload from '../util/upload.js'
import { uploadImage } from '../controllers/image.controller.js';

const router = express.Router();

router.post("/", upload.single("file"), uploadImage);

export default router;