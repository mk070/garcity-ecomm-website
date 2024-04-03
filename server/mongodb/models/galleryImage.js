import mongoose from 'mongoose';

const galleryImageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
});

const GalleryImage = mongoose.model('GalleryImage', galleryImageSchema);

export default GalleryImage;
