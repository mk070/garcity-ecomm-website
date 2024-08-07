

import ClientImage from '../mongodb/models/clientImage.js';

export const uploadClientImage = async (req, res) => {
    try {
      const { imageName, imageData } = req.body; // Assuming the frontend sends image name and data
  
      const image = new ClientImage({
        name: imageName,
        img: imageData // Store base64 encoded image data directly
      });
  
      await image.save();
      res.status(201).json({ message: 'Image uploaded successfully!' });
    } catch (error) {
      console.error('Error uploading image:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
};



export const getClientImages = async (req, res) => {
  try {
    const images = await ClientImage.find({}, 'name img');
    res.json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const deleteClientImage = async (req, res) => {
  try {
    const { id } = req.params;
    await ClientImage.findByIdAndDelete(id);
    res.status(204).end();
  } catch (error) {
    console.error('Error deleting image:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
