import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead,Snackbar, TableRow } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import DeleteIcon from '@mui/icons-material/Delete';

const YoutubeVideo = () => {
  const [videoLink, setVideoLink] = useState('');
  const [uploadedVideos, setUploadedVideos] = useState([]);
  const [isUploadSuccess, setUploadSuccess] = useState(false);
  const [isDeleteSuccess, setDeleteSuccess] = useState(false);

  const handleUpload = () => {
    // Add the video link to the uploaded videos list
    setUploadedVideos([...uploadedVideos, videoLink]);
    // Clear the input field after uploading
    setVideoLink('');
    // Set upload success snackbar to true
    setUploadSuccess(true);
  };

  const handleDelete = (index) => {
    // Remove the video at the specified index from the uploaded videos list
    const updatedVideos = [...uploadedVideos];
    updatedVideos.splice(index, 1);
    setUploadedVideos(updatedVideos);
    // Set delete success snackbar to true
    setDeleteSuccess(true);
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
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Video Link</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {uploadedVideos.map((link, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {link}
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      {/* Snackbar for upload success */}
      <Snackbar
        open={isUploadSuccess}
        autoHideDuration={6000}
        onClose={() => setUploadSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        message="Video uploaded successfully!"
      />

      {/* Snackbar for delete success */}
      <Snackbar
        open={isDeleteSuccess}
        autoHideDuration={6000}
        onClose={() => setDeleteSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        message="Video deleted successfully!"
      />
    </Box>
  );
};

export default YoutubeVideo;
