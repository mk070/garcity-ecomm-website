// routes/galleryRoutes.js

import express from 'express';
import { uploadImage, getImages, deleteImage } from '../controllers/galleryController.js';

const router = express.Router();

router.post('/upload', uploadImage);
router.get('/images', getImages);
router.delete('/images/:name', deleteImage);

export default router;
