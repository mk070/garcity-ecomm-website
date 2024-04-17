import mongoose from 'mongoose';

const YoutubeLinkSchema = new mongoose.Schema({
    link: {
        type: String,
        required: true
    }
});

const YoutubeLink = mongoose.model('YoutubeLink', YoutubeLinkSchema);

export default YoutubeLink;
