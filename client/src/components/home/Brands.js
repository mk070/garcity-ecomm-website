import { React, useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import { Box, useMediaQuery } from '@mui/material';

// Import other logos as needed

import logo1 from '../../assets/images/brands/image1.png'
import logo2 from '../../assets/images/brands/image2.png'
import logo3 from '../../assets/images/brands/image3.png'
import logo4 from '../../assets/images/brands/image4.png'
import logo5 from '../../assets/images/brands/image5.png'
import logo6 from '../../assets/images/brands/image6.png'
import logo7 from '../../assets/images/brands/image7.png'
import logo8 from '../../assets/images/brands/image8.png'

const default_images = [logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8];


export const Brands = () => {

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [images, setImages] = useState([]);
  const [imagesFetched, setImagesFetched] = useState(false);

  const fetchImages = async () => {
    try {
      const response = await fetch('/api/Client/images');
      if (response.ok) {
        const images = await response.json();
        setImages(images);
        setImagesFetched(true);
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
    <Box sx={{my:{xs:5}}}>
        <Marquee gradient autoFill speed={90}>

           {imagesFetched && images.length >= 4 ? (
              images.map((image, index) => (
                 <img key={index} width={isSmallScreen?'50px':'85px'} style={{marginRight:isSmallScreen?"20px":"50px"}} src={`data:${image.contentType};base64,${image.img}`} alt="" />
      
              ))
            ) : (
              // Render default images when no images are fetched
              default_images.map((img, idx) => (
                 <img width={isSmallScreen?'50px':'85px'} style={{marginRight:isSmallScreen?"20px":"50px"}} src={img} alt="" />
              
              ))
            )}
          
{/*           
          <img width={isSmallScreen?'50px':'85px'} style={{marginRight:isSmallScreen?"20px":"50px"}} src={logo2} alt="" />
          
          <img width={isSmallScreen?'50px':'85px'} style={{marginRight:isSmallScreen?"20px":"50px"}} src={logo3} alt="" />
          
          <img width={isSmallScreen?'50px':'85px'} style={{marginRight:isSmallScreen?"20px":"50px"}} src={logo4} alt="" />
          
          <img width={isSmallScreen?'50px':'85px'} style={{marginRight:isSmallScreen?"20px":"50px"}} src={logo5} alt="" />
          
          <img width={isSmallScreen?'50px':'85px'} style={{marginRight:isSmallScreen?"20px":"50px"}} src={logo6} alt="" />
          
          <img width={isSmallScreen?'50px':'85px'} style={{marginRight:isSmallScreen?"20px":"50px"}} src={logo7} alt="" />
          
          <img width={isSmallScreen?'50px':'85px'} style={{marginRight:isSmallScreen?"20px":"50px"}} src={logo8} alt="" />
           */}
        </Marquee>

    </Box>
  );
};

export default Brands;
