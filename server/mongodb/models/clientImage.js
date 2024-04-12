// server/mongodb/models/ClientImage.js
import mongoose from 'mongoose';

const ClientImageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    img: {
        type: String, // Store image data as Buffer
        contentType: String // Store content type of the image
    }
});

const ClientImage = mongoose.model('ClientImages', ClientImageSchema);

export default ClientImage;
