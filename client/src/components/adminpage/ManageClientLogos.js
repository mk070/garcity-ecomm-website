
import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Snackbar, CircularProgress, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Sidebar } from './Sidebar';
import { Appbar } from './Appbar';

 const ManageClientLogos = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [isUploadSuccess, setUploadSuccess] = useState(false);
  const [isDeleteSuccess, setDeleteSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [imageToDeleteId, setImageToDeleteId] = useState(null);
  const [showUploadConfirmation, setShowUploadConfirmation] = useState(false);
  const [imageName, setImageName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const MAX_LIMIT = 9;

  const convertToBase64 = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert('Please select a file');
      return;
    }
  
    // Check if already reached maximum limit
    if (uploadedImages.length >= MAX_LIMIT) {
      alert(`You can upload maximum ${MAX_LIMIT} images.`);
      return;
    }
  
    setIsLoading(true);
  
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile); // Read the file as a data URL
  
    reader.onload = async () => {
      try {
        const imageData = reader.result.split(',')[1]; // Get base64 data portion
        const response = await fetch('/api/Client/upload', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            imageName: selectedFile.name,
            imageData // Pass the base64 image data to the backend
          })
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
  };
  
  
  
  const handleDelete = async (id) => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/Client/images/${id}`, {
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
      const response = await fetch('/api/Client/images');
      if (response.ok) {
        const images = await response.json();
        setUploadedImages(images);
      } else {
        console.error('Failed to fetch images');
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <Appbar />
      <Sidebar />

      <Box sx={{display:'flex', flexDirection:{sm:'row'},ml:{sm:"240px"}}}>
        <Box sx={{width:{sm:"100%"}}}>
          <Box sx={{ mt: { sm: '65px' }, display: 'flex', alignItems: 'center', padding: { sm: '40px 130px' } }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h5" gutterBottom>
                Upload Client images here
              </Typography>
            </Box>
            <form onSubmit={(event) => handleUpload(event)}>
              <Box>
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="upload-button"
                  type="file"
                  onChange={convertToBase64}
                />
                <label htmlFor="upload-button">
                  <Button variant="contained" component="span" startIcon={<CloudUploadIcon />}>
                    Select File
                  </Button>
                </label>
                <Button type="submit" sx={{ml:{sm:'20px'}}} variant="contained" startIcon={<CloudUploadIcon />} disabled={!selectedFile}>
                  Upload
                </Button>
              </Box>
            </form>
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
                  {Array.isArray(uploadedImages) && uploadedImages.length > 0 ? (
                    uploadedImages.map((image) => (
                      <TableRow key={image._id}>
                        <TableCell component="th" scope="row">
                          <img

                            src={`data:${image.contentType};base64,${image.img}`} 
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
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={3}>No images uploaded yet.</TableCell>
                    </TableRow>
                  )}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Box>

          <Snackbar
            open={isUploadSuccess}
            autoHideDuration={1000}
            onClose={() => setUploadSuccess(false)}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            message="Image uploaded successfully!"
          />

          <Snackbar
            open={isDeleteSuccess}
            autoHideDuration={1000}
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
        </Box>
      </Box>
    </>
  );
};

export default ManageClientLogos;