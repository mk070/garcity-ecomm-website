import { Box, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import '../App.css'
// import { Banner } from '../components/home/';
import { Herosection } from '../components/home/Herosection';
import { Brands } from '../components/home/Brands';
import { Categories } from '../components/home/Categories';
import { Popularcollection } from '../components/home/Popularcollection';
import { Feature } from '../components/home/Feature';


export const Home = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Box>
      
      <Herosection /> 
      <Brands />
      <Categories />
      <Popularcollection />
      <Feature />
      
    </Box>
  );
};
