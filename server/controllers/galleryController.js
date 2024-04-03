// controllers/galleryController.js

import GalleryImage from '../mongodb/models/galleryImage.js';

export const uploadImage = async (req, res) => {
    try {
        const { buffer, mimetype } = req.file;
        const imgData = `data:${mimetype};base64,${buffer.toString('base64')}`;

        const image = new GalleryImage({
            name: req.file.originalname,
            img: imgData
        });
        await image.save();
        res.status(201).json({ message: 'Image uploaded successfully!' });
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getImages = async (req, res) => {
    try {
        const images = await GalleryImage.find({}, 'name img');
        res.json(images);
    } catch (error) {
        console.error('Error fetching images:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const deleteImage = async (req, res) => {
    try {
        const { name } = req.params;
        await GalleryImage.findOneAndDelete({ name });
        res.status(204).end();
    } catch (error) {
        console.error('Error deleting image:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
