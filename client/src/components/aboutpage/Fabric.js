import React, { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import img2 from "../../assets/images/about/5 SERVICES IMAGES/FABRICATION2.png";
import img1 from "../../assets/images/about/5 SERVICES IMAGES/FABRICATION.png";

const Fabric = () => {
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
    <Container maxWidth="xl" sx={{position: 'sticky',top: 80 ,height:{sm:'75vh'}, backgroundColor:"",marginTop: { xs: '10px' }, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center', alignItems: 'center', gap: '100px' }}>
      
      <Box>
        <Typography mx={10} variant="h3" sx={{ fontSize: '40px', fontFamily: 'integral-Regular !important', marginBottom: '50px', marginTop: { xs: '50px', sm: '50px' } }}>
        FABRICATION
        </Typography>
        <Typography height={100} sx={{ width: '450px', marginLeft: '80px', marginBottom: '50px' }}>
        Get premium fabrics customized to your needs, including material,
GSM, and colors. Specializing in cotton and polyester varieties for tailored perfection.        </Typography>
      </Box>

      <Box height={400} width={500}  position={'relative'} sx={{pt:{sm:'20px'},display: 'flex', justifyContent:{sm:"center"}, alignItems:{sm:"center"},flexDirection: { sm: 'column' }, marginRight: '100px' }}>
       
        <Box sx={{borderRadius:"20px", width: { sm: '50%' }, height: { sm: '60%' }, position: 'absolute', top: 140, left: 180 }}>
          <img src={currentImage} style={{borderRadius:"20px",boxShadow:" rgb(58 58 58 / 77%) 3px 4px 5px 3px",width: '100%', height: '100%', position: 'relative', zIndex: 1 }} alt="" /> 
        </Box>

        <Box sx={{borderRadius:"20px", width: { sm: '50%' }, height: { sm: '60%' }, position: 'absolute', top: 70, left: 100 }}>
          <img src={isFront ? img2 : img1} style={{borderRadius:"20px", width: '100%',boxShadow:" rgb(58 58 58 / 77%) 3px 4px 5px 3px", height: '100%', position: 'relative', zIndex: 10 }} alt="" />  
        </Box>

      </Box>
    </Container>
  );
};

export default Fabric;
