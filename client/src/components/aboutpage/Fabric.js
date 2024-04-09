import React, { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import img1 from "../../assets/images/about/fabric1.png";
import img2 from "../../assets/images/about/fabric2.png";

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
    <Container maxWidth="xl" sx={{ marginTop: { xs: '10px' }, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center', alignItems: 'center', gap: '100px' }}>
      
      <Box>
        <Typography mx={10} variant="h3" sx={{ fontSize: '40px', fontFamily: 'integral-Regular !important', marginBottom: '50px', marginTop: { xs: '50px', sm: '50px' } }}>
          Fabric
        </Typography>
        <Typography height={100} sx={{ width: '450px', marginLeft: '80px', marginBottom: '50px' }}>
          We specialize in crafting garments with precision and expertise, ensuring top-notch quality and durability. We make fabrics in 100% cotton, organic cotton, Supima cotton, cotton-poly blend, polyester, polyester-spandex blend, modal, and viscose.
        </Typography>
      </Box>

      <Box height={400} width={500} display="flex" borderRadius={5} sx={{ display: 'flex', flexDirection: { sm: 'column' }, marginRight: '100px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Box sx={{ width: { sm: '40%' }, height: { sm: '50%' }, border: '1px solid black', boxShadow: '5px 4px 3px 1px rgb(58 58 58 / 35%)', position: 'relative' }}>
          <img src={currentImage} style={{ width: '100%', height: '100%', position: 'relative', zIndex: 1 }} alt="" />
          
        </Box>
        <Box sx={{ width: { sm: '40%' }, height: { sm: '50%' }, border: '1px solid black', boxShadow: '5px 4px 3px 1px rgb(58 58 58 / 35%)', position: 'absolute', top: 0, left: 0 }}>
          <img src={isFront ? img2 : img1} style={{ width: '100%', height: '100%', position: 'relative', zIndex: 0 }} alt="" />
          
        </Box>
      </Box>
    </Container>
  );
};

export default Fabric;
