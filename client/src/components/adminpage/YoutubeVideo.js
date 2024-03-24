import React, { useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';

const YoutubeVideo = () => {
  const [videoLink, setVideoLink] = useState('');
  const [uploadedVideos, setUploadedVideos] = useState([]);

  const handleUpload = () => {
    // Implement upload functionality here
    // Add the video link to the uploaded videos list
    setUploadedVideos([...uploadedVideos, videoLink]);
    // Clear the input field after uploading
    setVideoLink('');
  };

  const handleDelete = (index) => {
    // Implement delete functionality here
    // Remove the video at the specified index from the uploaded videos list
    const updatedVideos = [...uploadedVideos];
    updatedVideos.splice(index, 1);
    setUploadedVideos(updatedVideos);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        YouTube Video Gallery
      </Typography>

      {/* Upload Section */}
      <Box sx={{ mb: 3 }}>
        <TextField
          label="Enter YouTube Video Link"
          variant="outlined"
          fullWidth
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<YouTubeIcon />}
          onClick={handleUpload}
          sx={{ mt: 2 }}
        >
          Upload Video
        </Button>
      </Box>

      {/* Gallery Section */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {uploadedVideos.map((link, index) => (
          <Box key={index} sx={{ p: 2 }}>
            {/* Render individual video component */}
            {/* Display video thumbnail, title, and delete button */}
            <div>{link}</div> {/* Display the video link */}
            <Button variant="outlined" color="error" onClick={() => handleDelete(index)}>Delete</Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default YoutubeVideo;
