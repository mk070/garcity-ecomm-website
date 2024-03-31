import React from 'react';
import Marquee from "react-fast-marquee";

import logo1 from '../../assets/images/brands/image1.png'
import logo2 from '../../assets/images/brands/image2.png'
import logo3 from '../../assets/images/brands/image3.png'
import logo4 from '../../assets/images/brands/image4.png'
import logo5 from '../../assets/images/brands/image5.png'
import logo6 from '../../assets/images/brands/image6.png'
import logo7 from '../../assets/images/brands/image7.png'
import logo8 from '../../assets/images/brands/image8.png'
import { Box } from '@mui/material';
// Import other logos as needed

export const Brands = () => {
  // Define your logos array
  const logos = [logo1, logo2, logo3,logo4, logo5, logo6,logo7, logo8]; // Add more logos as needed

  return (
    <Box>
        <Marquee gradient autoFill speed={90}>
          <img width={'85px'} style={{marginRight:"50px"}} src={logo1} alt="" />
          <img width={'85px'} style={{marginRight:"50px"}} src={logo2} alt="" />
          <img width={'85px'} style={{marginRight:"50px"}} src={logo3} alt="" />
          <img width={'85px'} style={{marginRight:"50px"}} src={logo4} alt="" />
          <img width={'85px'} style={{marginRight:"50px"}} src={logo5} alt="" />
          <img width={'85px'} style={{marginRight:"50px"}} src={logo6} alt="" />
          <img width={'85px'} style={{marginRight:"50px"}} src={logo7} alt="" />
          <img width={'85px'} style={{marginRight:"50px"}} src={logo8} alt="" />
        </Marquee>

    </Box>
  );
};

export default Brands;
