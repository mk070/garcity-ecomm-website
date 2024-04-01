import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Snackbar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export const ManageGallery = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageName, setImageName] = useState('');
  const [uploadedImages, setUploadedImages] = useState([]);
  const [isUploadSuccess, setUploadSuccess] = useState(false);
  const [isDeleteSuccess, setDeleteSuccess] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setImageName(event.target.files[0].name); // Extracting name from the file
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', selectedFile);
      formData.append('name', imageName);

      const response = await fetch('/api/gallery/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setUploadSuccess(true);
        setSelectedFile(null);
        setImageName('');
        fetchImages();
      } else {
        console.error('Upload failed');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleDelete = async (name) => {
    try {
      const response = await fetch(`/api/gallery/images/${name}`, {
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
    }
  };

  const fetchImages = async () => {
    try {
      const response = await fetch('/api/gallery/images');
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
      <Box sx={{ mt: { sm: '65px' }, display: 'flex', alignItems: 'center', padding: { sm: '40px 130px' } }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5" gutterBottom>
            Upload Gallery images here
          </Typography>
        </Box>
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

      <Box sx={{ p: { sm: '20px 130px' } }}>
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
                    <img src={`data:${image.contentType};base64,${Buffer.from(image.data).toString('base64')}`} alt={image.name} style={{ width: '100px', height: 'auto' }} />
                  </TableCell>
                  <TableCell>{image.name}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="outlined"
                      color="error"
                      startIcon={<DeleteIcon />}
                      onClick={() => handleDelete(image.name)}
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
    </>
  );
};
