import React from 'react';
import { Box } from '@mui/material';

const Banner = ({ image }) => {
  return (
    <>
      <Box sx={{ mt:{xs:'-10px'},height: { sm: '370px', xs:'150px' }, padding: { sm: '0 100px', xs:'0px' }, mb: { sm: '30px' } }}>
        <img src={image} style={{ width: '100%', height: '100%', borderRadius: "20px", objectFit: 'cover' }} alt="" />
      </Box>
    </>
  );
};

export default Banner;
