import React, { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import img1 from "../../assets/images/about/5 SERVICES IMAGES/WORLDWIDE SHIPPING2.png";
import img2 from "../../assets/images/about/5 SERVICES IMAGES/WORLDWIDE SHIPPING.png";


const Shipping = () => {
  const [currentImage, setCurrentImage] = useState(img1);
  const [isFront, setIsFront] = useState(true);

  useEffect(() => {
    // Change image and swap front/back every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === img1 ? img2 : img1));
      setIsFront((prevIsFront) => !prevIsFront);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);
//ebb095
  return (
    <Container maxWidth="xl" position='sticky' sx={{backgroundColor:"white",position: 'sticky', top: 80 ,height:{sm:'85vh'},marginTop: { xs: '10px' }, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center', alignItems: 'center', gap: '100px' }}>
      
      <Box sx={{height:{sm:'100%'}, width:{sm:"100%"},pt:{sm:"50px"},pl:{sm:"20px"}}}>
        <Typography mx={10} variant="h3" sx={{ fontSize: '40px', fontFamily: 'integral-Regular !important', marginBottom: '50px', marginTop: { xs: '50px', sm: '50px' } }}>
        WORLDWIDE SHIPPING
        </Typography>
        <Typography height={100} sx={{ width: '100%', marginLeft: '80px', marginBottom: '50px' }}>
          Count on our reliable and efficient shipping services to seamlessly deliver your products
          worldwide, ensuring they reach their intended destination safely and on schedule.
          Whether by air or sea, we handle your shipping needs with the utmost care and
          precision, allowing you to focus on scaling your business. With our proven track record of
          reliability and professionalism, you can trust us to manage your shipping requirements
          seamlessly, providing you with peace of mind and convenience every step of the way
  </Typography>
      </Box>

      <Box   position={'relative'} sx={{height:{sm:'100%'}, width:{sm:"100%"},display: 'flex', justifyContent:{sm:"center"}, alignItems:{sm:"center"},flexDirection: { sm: 'column' }, marginRight: '100px' }}>
       
        <Box sx={{borderRadius:"20px", width: { sm: '70%' }, height: { sm: '60%' },position: 'absolute', top: 140, left: 200 }}>
          <img src={currentImage} style={{borderRadius:"20px", width: '100%', boxShadow:" rgb(58 58 58 / 77%) 3px 4px 5px 3px",height: '100%', position: 'relative', zIndex: 1 }} alt="" /> 
        </Box>

        <Box sx={{borderRadius:"20px", width: { sm: '70%' }, height: { sm: '60%' }, position: 'absolute', top: 70, left: 130 }}>
          <img src={isFront ? img2 : img1} style={{borderRadius:"20px", width: '100%', boxShadow:" rgb(58 58 58 / 77%) 3px 4px 5px 3px",height: '100%', position: 'relative', zIndex: 10 }} alt="" />  
        </Box>

      </Box>
    </Container>
  );
};

export default Shipping;
