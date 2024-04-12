import YoutubeLink from "../mongodb/models/youtubeLink.js"

export const uploadYoutubeLink = async (req, res) => {
    try {
        const { link } = req.body; // Assuming the frontend sends the link

        const youtubeLink = new YoutubeLink({
            link: link,
        });

        await youtubeLink.save();
        res.status(201).json({ message: 'Link uploaded successfully!' });
    } catch (error) {
        console.error('Error uploading link:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getYoutubeLink = async (req, res) => {
    try {
        const links = await YoutubeLink.find({}, 'link');
        res.json(links);
    } catch (error) {
        console.error('Error fetching Links:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const deleteYoutubeLink = async (req, res) => {
    try {
        const { id } = req.params;
        await YoutubeLink.findByIdAndDelete(id);
        res.status(204).end();
    } catch (error) {
        console.error('Error deleting link:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
