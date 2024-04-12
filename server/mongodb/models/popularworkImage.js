// server/mongodb/models/PopularWorkImage.js
import mongoose from 'mongoose';

const PopularWorkImageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    img: {
        type: String, // Store image data as Buffer
        contentType: String // Store content type of the image
    }
});

const PopularWorkImage = mongoose.model('PopularWorkImage', PopularWorkImageSchema);

export default PopularWorkImage;
