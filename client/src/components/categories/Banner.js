import React from 'react';
import { Box } from '@mui/material';

const Banner = ({ image }) => {
  return (
    <>
      <Box sx={{ height: { sm: '370px', xs:'auto' }, padding: { sm: '0 100px', xs:'10px' }, mb: { sm: '30px' } }}>
        <img src={image} style={{ width: '100%', height: '100%', borderRadius: "20px", objectFit: 'cover' }} alt="" />
      </Box>
    </>
  );
};

export default Banner;
