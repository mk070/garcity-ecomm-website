// server/routes/galleryRoutes.js

import express from 'express';
import { uploadGalleryImage, getGalleryImages, deleteGalleryImage } from '../controllers/galleryController.js';
import { uploadPopularWorkImage, getPopularWorkImages, deletePopularWorkImage } from '../controllers/popularworkController.js';
import { uploadClientImage, getClientImages, deleteClientImage } from '../controllers/clientController.js';

const router = express.Router();

router.post('/gallery/upload', uploadGalleryImage);
router.get('/gallery/images', getGalleryImages);
router.delete('/gallery/images/:id', deleteGalleryImage);

//PopularWork Images Route
router.post('/PopularWork/upload', uploadPopularWorkImage);
router.get('/PopularWork/images', getPopularWorkImages);
router.delete('/PopularWork/images/:id', deletePopularWorkImage);

//Client Images Route
router.post('/Client/upload', uploadClientImage);
router.get('/Client/images', getClientImages);
router.delete('/Client/images/:id', deleteClientImage);

export default router;
