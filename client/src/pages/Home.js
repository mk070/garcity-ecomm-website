import { Box, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import '../App.css'
import { Banner } from '../components/Banner';
import { Herosection } from '../components/Herosection';
import { Brands } from '../components/Brands';
import { Categories } from '../components/Categories';
import { Popularcollection } from '../components/Popularcollection';


export const Home = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Box
      // sx={{
      //   display: 'flex',
      //   flexDirection: isSmallScreen ? 'column-reverse': 'column',
      //   marginTop: '64px',
      //   alignItems: 'center',
      //   padding: isSmallScreen ? '0': '0 130px',
      //   height: '91vh', // Adjust height to auto for responsiveness
        
      // }}
    >
      <Herosection /> 
      <Brands />
      <Categories />
      <Popularcollection />
      
    </Box>
  );
};
