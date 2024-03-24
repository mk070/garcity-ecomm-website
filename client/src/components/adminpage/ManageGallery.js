import React, { useState } from 'react';
import { Appbar } from './Appbar';
import { Box, Button, Typography, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Snackbar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import image1 from '../../assets/images/gallery/banner.jpg'; // Import your image file

export const ManageGallery = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploadSuccess, setUploadSuccess] = useState(false);
  const [isDeleteSuccess, setDeleteSuccess] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Implement upload functionality here
    console.log(selectedFile);
    // Assume upload is successful
    setUploadSuccess(true);
  };

  const handleDelete = () => {
    // Implement delete functionality here
    // Assume delete is successful
    setDeleteSuccess(true);
  };

  // Dummy data for uploaded images list
  const uploadedImages = [
    { id: 1, name: 'image1.jpg', image: image1 },
    { id: 2, name: 'image2.jpg', image: image1 },
    { id: 3, name: 'image3.jpg', image: image1 },
    // Add more images as needed
  ];

  return (
    <>
      <Appbar />
      <Box sx={{ mt: { sm: '65px' }, display: 'flex', alignItems: 'center', padding: { sm: '40px 130px' } }}>
        {/* Upload your image heading */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5" gutterBottom>
            Upload your image
          </Typography>
        </Box>

        {/* Upload Button with icon */}
        <Box>
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="upload-button"
            type="file"
            onChange={handleFileChange}
          />
          <label htmlFor="upload-button">
            <Button variant="contained" component="span" startIcon={<CloudUploadIcon />} onClick={handleUpload}>
              Upload
            </Button>
          </label>
        </Box>
      </Box>

      {/* Uploaded Images List */}
      <Box sx={{ p: { sm: '0 130px' } }}>
        <List style={{ border: '1px solid #ccc', borderRadius: '5px' }}>
          {uploadedImages.map((image) => (
            <ListItem key={image.id} style={{ borderBottom: '1px solid #ccc', cursor: 'pointer' }}>
              <img src={image.image} alt={image.name} style={{ marginRight: '16px', width: '100px', height: 'auto' }} />
              <ListItemText primary={image.name} style={{ userSelect: 'none' }} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Snackbar for upload success */}
      <Snackbar
        open={isUploadSuccess}
        autoHideDuration={6000}
        onClose={() => setUploadSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        message="Image uploaded successfully!"
        
      />

      {/* Snackbar for delete success */}
      <Snackbar
        open={isDeleteSuccess}
        autoHideDuration={6000}
        onClose={() => setDeleteSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        message="Image deleted successfully!"
        
      />
    </>
  );
};
