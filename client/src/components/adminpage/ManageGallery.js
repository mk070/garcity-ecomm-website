import React, { useState } from 'react';
import { Appbar } from './Appbar';
import { Box, Button, Typography, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Snackbar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import image1 from '../../assets/images/gallery/banner.jpg'; // Import your image file

export const ManageGallery = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploadSuccess, setUploadSuccess] = useState(false);
  const [isDeleteSuccess, setDeleteSuccess] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([
    { id: 1, name: 'image1.jpg', image: image1 },
    { id: 2, name: 'image2.jpg', image: image1 },
    { id: 3, name: 'image3.jpg', image: image1 },
    // Add more images as needed
  ]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Implement upload functionality here
    console.log(selectedFile);
    // Assume upload is successful
    setUploadSuccess(true);
  };

  const handleDelete = (id) => {
    // Implement delete functionality here
    // Remove the image with the given id
    const updatedImages = uploadedImages.filter(image => image.id !== id);
    setUploadedImages(updatedImages);
    // Assume delete is successful
    setDeleteSuccess(true);
  };

  return (
    <>
      
      <Box sx={{ mt: { sm: '65px' }, display: 'flex', alignItems: 'center', padding: { sm: '40px 130px' } }}>
        {/* Upload your image heading */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5" gutterBottom>
            Upload Gallery images here
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
                <TableRow key={image.id}>
                  <TableCell component="th" scope="row">
                    <img src={image.image} alt={image.name} style={{ width: '100px', height: 'auto' }} />
                  </TableCell>
                  <TableCell >{image.name}</TableCell>
                   <TableCell align="right">
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDelete(image.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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
