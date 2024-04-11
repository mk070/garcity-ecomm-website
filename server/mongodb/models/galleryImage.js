// server/mongodb/models/galleryImage.js
import mongoose from 'mongoose';

const galleryImageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    img: {
        type: String, // Store image data as Buffer
        contentType: String // Store content type of the image
    }
});

const GalleryImage = mongoose.model('GalleryImage', galleryImageSchema);

export default GalleryImage;
