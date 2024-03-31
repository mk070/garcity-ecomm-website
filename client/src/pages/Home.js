import { Box, Typography, useMediaQuery, Fab } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { ArrowUpward } from '@mui/icons-material';
import '../App.css'
import { Herosection } from '../components/home/Herosection';
import { Brands } from '../components/home/Brands';
import { Popularcollection } from '../components/home/Popularcollection';
import { Feature } from '../components/home/Feature';
import { MoveupButton } from '../components/MoveupButton';
import { ContactButton } from '../components/ContactButton';
import Testimonial from '../components/home/Testimonial';
import { Specialities } from '../components/home/Specialities';

export const Home = () => {
  return (
    <Box>
      <Herosection /> 
      <Brands />
      <Specialities />
      <Popularcollection />
      <Feature />
      <Testimonial />
      <MoveupButton />
      <ContactButton />
    </Box>
  );
};
