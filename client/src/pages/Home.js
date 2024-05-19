import { Box} from '@mui/material';
import {React,useEffect} from 'react';
import '../App.css'
import { Herosection } from '../components/home/Herosection';
import { Brands } from '../components/home/Brands';
import { Popularcollection } from '../components/home/Popularcollection';
import { Feature } from '../components/home/Feature';
import Testimonial from '../components/home/Testimonial';
import { Specialities } from '../components/home/Specialities';

 const Home = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);

  },[])
  return (
    <Box>
      <Herosection /> 
      <Brands />
      <Specialities />
      <Popularcollection />
      <Feature />
      <Testimonial />
    </Box>
  );
};

export default Home ;