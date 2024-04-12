import PopularWorkImage from '../mongodb/models/popularworkImage.js';

export const uploadPopularWorkImage = async (req, res) => {
    try {
      const { imageName, imageData } = req.body; // Assuming the frontend sends image name and data
  
      const image = new PopularWorkImage({
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



export const getPopularWorkImages = async (req, res) => {
  try {
    const images = await PopularWorkImage.find({}, 'name img');
    res.json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const deletePopularWorkImage = async (req, res) => {
  try {
    const { id } = req.params;
    await PopularWorkImage.findByIdAndDelete(id);
    res.status(204).end();
  } catch (error) {
    console.error('Error deleting image:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
