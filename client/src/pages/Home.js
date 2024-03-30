import { Box, Typography, useMediaQuery, Fab } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { ArrowUpward } from '@mui/icons-material';
import '../App.css'
import { Herosection } from '../components/home/Herosection';
import { Brands } from '../components/home/Brands';
import { Categories } from '../components/home/Categories';
import { Popularcollection } from '../components/home/Popularcollection';
import { Feature } from '../components/home/Feature';
import { MoveupButton } from '../components/MoveupButton';
import { ContactButton } from '../components/ContactButton';
import Testimonial from '../components/home/Testimonial';

export const Home = () => {
  return (
    <Box>
      <Herosection /> 
      <Brands />
      <Categories />
      <Popularcollection />
      <Feature />
      <Testimonial />
      <MoveupButton />
      <ContactButton />
    </Box>
  );
};
