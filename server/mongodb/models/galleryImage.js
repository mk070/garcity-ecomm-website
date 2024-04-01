// mongodb/models/galleryImage.js

import mongoose from 'mongoose';

const galleryImageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    data: {
        type: Buffer,
        required: true
    },
    contentType: {
        type: String,
        required: true
    }
});

const GalleryImage = mongoose.model('GalleryImage', galleryImageSchema);

export default GalleryImage;
