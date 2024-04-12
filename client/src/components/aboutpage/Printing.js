import React, { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import img1 from "../../assets/images/about/5 SERVICES IMAGES/CUSTOM PRINTING2.png";
import img2 from "../../assets/images/about/5 SERVICES IMAGES/CUSTOM PRINTING.png";


const Printing = () => {
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

  return (
    <Container maxWidth="xl" position='sticky' sx={{backgroundColor:"#FFF4F1",position: 'sticky', top: 80 ,height:{sm:'85vh'},marginTop: { xs: '10px' }, display: 'flex', flexDirection: { xs: 'column', sm: 'row-reverse' }, justifyContent: 'center', alignItems: 'center', gap: '100px' }}>
      
      <Box sx={{height:{sm:'100%'}, width:{sm:"100%"},pt:{sm:"50px"},pl:{sm:"0px"}}}>
        <Typography  variant="h3" sx={{ fontSize: '40px', fontFamily: 'integral-Regular !important', marginBottom: '50px', marginTop: { xs: '50px', sm: '50px' } }}>
        CUSTOM PRINTING
        </Typography>
        <Typography height={100} sx={{ width: '90%', marginBottom: '50px' }}>
        Elevate your designs with our comprehensive printing services, meticulously tailored to
        bring your creative vision to life. From traditional screen printing techniques to cuttingedge digital and sublimation methods, we offer a diverse range of options to suit your
        unique needs. Our skilled team ensures vibrant colors, precise detailing, and top-notch
        quality in every print, ensuring your garments stand out from the crowd. With our
        extensive printing options, you can personalize your creations and make a lasting
        impression that resonates with your audience.
        </Typography>
      </Box>

      <Box   position={'relative'} sx={{height:{sm:'100%'}, width:{sm:"100%"},display: 'flex', justifyContent:{sm:"center"}, alignItems:{sm:"center"},flexDirection: { sm: 'column' }, marginRight: '0px' }}>
       
        <Box sx={{borderRadius:"20px", width: { sm: '450px' }, height: { sm: '60%' },position: 'absolute', top: 140, left: 180 }}>
          <img src={currentImage} style={{borderRadius:"20px", width: '100%', boxShadow:" rgb(58 58 58 / 77%) 3px 4px 5px 3px",height: '100%', position: 'relative', zIndex: 1 }} alt="" /> 
        </Box>

        <Box sx={{borderRadius:"20px", width: { sm: '450px' }, height: { sm: '60%' }, position: 'absolute', top: 70, left: 110 }}>
          <img src={isFront ? img2 : img1} style={{borderRadius:"20px", width: '100%', boxShadow:" rgb(58 58 58 / 77%) 3px 4px 5px 3px",height: '100%', position: 'relative', zIndex: 10 }} alt="" />  
        </Box>

      </Box>
    </Container>
  );
};

export default Printing;
