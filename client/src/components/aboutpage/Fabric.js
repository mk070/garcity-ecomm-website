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
    <Container maxWidth="xl" position='sticky' sx={{backgroundColor:"white",position: 'sticky', top: 80 ,height:{sm:'85vh'},marginTop: { xs: '10px' }, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center', alignItems: 'center', gap: '100px' }}>
      
      <Box sx={{height:{sm:'100%'}, width:{sm:"100%"},pt:{sm:"50px"},pl:{sm:"20px"}}}>
        <Typography mx={10} variant="h3" sx={{ fontSize: '40px', fontFamily: 'integral-Regular !important', marginBottom: '50px', marginTop: { xs: '50px', sm: '50px' } }}>
          FABRICATION
        </Typography>
        <Typography height={100} sx={{ width: '100%', marginLeft: '80px', marginBottom: '50px' }}>
        At our facility, we meticulously craft fabrics to your specifications, ensuring exceptional
        quality and durability. Choose from a diverse range of materials, including cotton,
        polyester, and blends, tailored to your unique requirements. Our state-of-the-art
        equipment and techniques guarantee precise color, pattern, and texture adjustments,
        resulting in fabrics of superior quality and consistency. Embracing sustainable practices,
        we prioritize eco-friendly production methods and materials throughout the fabrication
        process. With a robust supply chain and efficient production processes, we guarantee
        timely delivery of your fabric orders, regardless of size or scope.
  </Typography>
      </Box>

      <Box   position={'relative'} sx={{height:{sm:'100%'}, width:{sm:"100%"},display: 'flex', justifyContent:{sm:"center"}, alignItems:{sm:"center"},flexDirection: { sm: 'column' }, marginRight: '100px' }}>
       
        <Box sx={{borderRadius:"20px", width: { sm: '450px' }, height: { sm: '60%' },position: 'absolute', top: 140, left: 200 }}>
          <img src={currentImage} style={{borderRadius:"20px", width: '100%', boxShadow:" rgb(58 58 58 / 77%) 3px 4px 5px 3px",height: '100%', position: 'relative', zIndex: 1 }} alt="" /> 
        </Box>

        <Box sx={{borderRadius:"20px", width: { sm: '450px' }, height: { sm: '60%' }, position: 'absolute', top: 70, left: 130 }}>
          <img src={isFront ? img2 : img1} style={{borderRadius:"20px", width: '100%', boxShadow:" rgb(58 58 58 / 77%) 3px 4px 5px 3px",height: '100%', position: 'relative', zIndex: 10 }} alt="" />  
        </Box>

      </Box>
    </Container>
  );
};

export default Fabric;
