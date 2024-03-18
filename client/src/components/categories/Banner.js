import React from 'react';
import { Box } from '@mui/material';

const Banner = ({ image }) => {
  return (
    <>
      <Box sx={{ height: { sm: '370px' }, padding: { sm: '0 100px' }, mb: { sm: '30px' } }}>
        <img src={image} style={{ width: '100%', height: '100%', borderRadius: '40px', objectFit: 'cover' }} alt="" />
      </Box>
    </>
  );
};

export default Banner;
