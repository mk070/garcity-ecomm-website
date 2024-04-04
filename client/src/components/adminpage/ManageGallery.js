import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Snackbar, CircularProgress, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export const ManageGallery = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [isUploadSuccess, setUploadSuccess] = useState(false);
  const [isDeleteSuccess, setDeleteSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [imageToDeleteId, setImageToDeleteId] = useState(null);
  const [showUploadConfirmation, setShowUploadConfirmation] = useState(false);
  const [imageName, setImageName] = useState('');

  const convertTobase64 = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setUploadedImages(reader.result);
      setImageName(e.target.files[0].name); // Set the image name here
    };
    reader.onerror = error => {
      console.log(error);
    }
  };

  const handleUpload = async () => {
    try {
      setIsLoading(true);

      const response = await fetch('/api/gallery/upload', {
        method: 'POST',
        body: JSON.stringify({
          base64: uploadedImages,
          name: imageName // Pass image name in the request
        }),
      });

      if (response.ok) {
        setUploadSuccess(true);
        await fetchImages(); // Wait for the images to be fetched again
        setShowUploadConfirmation(true); // Show upload confirmation message
        // Hide upload confirmation message after 3 seconds
        setTimeout(() => setShowUploadConfirmation(false), 3000);
      } else {
        console.error('Upload failed');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/gallery/images/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setDeleteSuccess(true);
        fetchImages();
      } else {
        console.error('Deletion failed');
      }
    } catch (error) {
      console.error('Error deleting image:', error);
    } finally {
      setIsLoading(false);
      setDeleteConfirmationOpen(false);
    }
  };

  const handleDeleteConfirmation = (id) => {
    setDeleteConfirmationOpen(true);
    setImageToDeleteId(id);
  };

  const handleCloseDeleteConfirmation = () => {
    setDeleteConfirmationOpen(false);
    setImageToDeleteId(null);
  };

  const fetchImages = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/gallery/images');
      if (response.ok) {
        const images = await response.json();
        setUploadedImages(images);
      } else {
        console.error('Failed to fetch images');
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <Box sx={{ mt: { sm: '65px' }, display: 'flex', alignItems: 'center', padding: { sm: '40px 130px' } }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5" gutterBottom>
            Upload Gallery images here
          </Typography>
        </Box>
        <Box>
          <input
           enctype="multipart/form-data"
            accept="image/*"
            style={{ display: 'none' }}
            id="upload-button"
            type="file"
            onChange={convertTobase64}
          />
          <label htmlFor="upload-button">
            <Button variant="contained" enctype="multipart/form-data" component="span" startIcon={<CloudUploadIcon />} onClick={handleUpload}>
              Upload
            </Button>
          </label>
        </Box>
      </Box>

      <Box sx={{ p: { sm: '20px 130px' } }}>
        {isLoading && <CircularProgress />}
        {!isLoading && (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {uploadedImages.map((image) => (
                  <TableRow key={image._id}>
                    <TableCell component="th" scope="row">
                      <img
                        src={image.img}
                        alt={image.name}
                        style={{ width: '100px', height: 'auto' }}
                      />
                    </TableCell>
                    <TableCell>{image.name}</TableCell>
                    <TableCell align="right">
                      <Button
                        variant="outlined"
                        color="error"
                        startIcon={<DeleteIcon />}
                        onClick={() => handleDeleteConfirmation(image._id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>

      <Snackbar
        open={isUploadSuccess}
        autoHideDuration={6000}
        onClose={() => setUploadSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        message="Image uploaded successfully!"
      />

      <Snackbar
        open={isDeleteSuccess}
        autoHideDuration={6000}
        onClose={() => setDeleteSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        message="Image deleted successfully!"
      />

      <Snackbar
        open={showUploadConfirmation}
        autoHideDuration={3000}
        onClose={() => setShowUploadConfirmation(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        message="Image uploaded successfully!"
      />

      <Dialog open={deleteConfirmationOpen} onClose={handleCloseDeleteConfirmation}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this image?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteConfirmation}>Cancel</Button>
          <Button onClick={() => handleDelete(imageToDeleteId)} color="error">Delete</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
