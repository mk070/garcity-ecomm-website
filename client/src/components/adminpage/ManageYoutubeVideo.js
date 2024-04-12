import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, Snackbar, TableRow, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import DeleteIcon from '@mui/icons-material/Delete';
import { Appbar } from './Appbar';
import { Sidebar } from './Sidebar';

export const ManageYoutubeVideo = () => {
  const [videoLink, setVideoLink] = useState('');
  const [uploadedVideos, setUploadedVideos] = useState([]);
  const [isUploadSuccess, setUploadSuccess] = useState(false);
  const [isDeleteSuccess, setDeleteSuccess] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [videoToDelete, setVideoToDelete] = useState(null);
  const MAX_UPLOADS = 3;

  useEffect(() => {
    // Fetch uploaded videos when component mounts
    fetchUploadedVideos();
  }, []);

  const fetchUploadedVideos = async () => {
    try {
      const response = await fetch('/api/YoutubeLink/link');
      const data = await response.json();
      setUploadedVideos(data);
    } catch (error) {
      console.error('Error fetching uploaded videos:', error);
    }
  };

  const isValidYoutubeLink = (link) => {
    // Regular expression to check if the link is a valid YouTube link
    const youtubeRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
    return youtubeRegex.test(link);
  };

  const handleUpload = async () => {
    if (uploadedVideos.length >= MAX_UPLOADS) {
      alert('You can upload only three links.');
      return;
    }

    if (!isValidYoutubeLink(videoLink)) {
      alert('Please enter a valid YouTube video link.');
      return;
    }

    try {
      const response = await fetch('/api/YoutubeLink/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ link: videoLink }),
      });
      if (response.ok) {
        // Clear the input field after uploading
        setVideoLink('');
        // Set upload success snackbar to true
        setUploadSuccess(true);
        // Fetch updated list of uploaded videos
        fetchUploadedVideos();
      } else {
        console.error('Upload failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/YoutubeLink/link/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Set delete success snackbar to true
        setDeleteSuccess(true);
        // Fetch updated list of uploaded videos
        fetchUploadedVideos();
      } else {
        console.error('Delete failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting video:', error);
    }
  };

  const handleOpenDeleteDialog = (videoId) => {
    setVideoToDelete(videoId);
    setDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setVideoToDelete(null);
    setDeleteDialogOpen(false);
  };

  const handleConfirmDelete = () => {
    if (videoToDelete) {
      handleDelete(videoToDelete);
      handleCloseDeleteDialog();
    }
  };

  return (
    <>
      <Appbar />
      <Sidebar />

      <Box sx={{ width: { sm: "80%" }, display: 'flex', flexDirection: { sm: 'row' } ,ml:{sm:"240px"}}}>
        <Box sx={{ p: "110px 130px 0px 130px", width: { sm: "100%" } }}>
          <Typography variant="h5" gutterBottom>
            Upload YouTube Video link
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
              disabled={uploadedVideos.length >= MAX_UPLOADS}
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
                {uploadedVideos.map((video) => (
                  <TableRow key={video._id}>
                    <TableCell component="th" scope="row">
                      {video.link}
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        variant="outlined"
                        color="error"
                        startIcon={<DeleteIcon />}
                        onClick={() => handleOpenDeleteDialog(video._id)}
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
            autoHideDuration={1000}
            onClose={() => setUploadSuccess(false)}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            message="Video uploaded successfully!"
          />

          {/* Snackbar for delete success */}
          <Snackbar
            open={isDeleteSuccess}
            autoHideDuration={1000}
            onClose={() => setDeleteSuccess(false)}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            message="Video deleted successfully!"
          />

          {/* Delete Confirmation Dialog */}
          <Dialog open={deleteDialogOpen} onClose={handleCloseDeleteDialog}>
            <DialogTitle>Confirm Delete</DialogTitle>
            <DialogContent>
              Are you sure you want to delete this video?
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDeleteDialog}>Cancel</Button>
              <Button onClick={handleConfirmDelete} color="error">Delete</Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </>
  );
};
