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
    <Container maxWidth="xl" position='sticky' sx={{ backgroundColor:"white",top: 80 ,height:{sm:'65vh'},marginTop: { xs: '10px' }, display: 'flex', flexDirection: { xs: 'column', sm: 'row-reverse' }, justifyContent: 'center', alignItems: 'center', gap: '100px' }}>
      
      <Box>
        <Typography mx={10} variant="h3" sx={{ fontSize: '40px', fontFamily: 'integral-Regular !important', marginBottom: '50px', marginTop: { xs: '50px', sm: '50px' } }}>
        CUSTOM PRINTING
        </Typography>
        <Typography height={100} sx={{ width: '450px', marginLeft: '80px', marginBottom: '50px' }}>
        Experience high-quality printing services, including screen, puff,
and hybrid techniques. Achieve vibrant designs with our top-notch printing options,
ensuring your brand stands out.
     </Typography>
      </Box>

      <Box height={400} width={500}  position={'relative'} sx={{pt:{sm:'20px'},display: 'flex', justifyContent:{sm:"center"}, alignItems:{sm:"center"},flexDirection: { sm: 'column' }, marginRight: '10px' }}>
       
        <Box sx={{borderRadius:"20px", width: { sm: '50%' }, height: { sm: '60%' }, position: 'absolute', top: 140, left: 180 }}>
          <img src={currentImage} style={{borderRadius:"20px", width: '100%',boxShadow:" rgb(58 58 58 / 77%) 3px 4px 5px 3px", height: '100%', position: 'relative', zIndex: 1 }} alt="" /> 
        </Box>

        <Box sx={{borderRadius:"20px", width: { sm: '50%' }, height: { sm: '60%' }, position: 'absolute', top: 70, left: 260 }}>
          <img src={isFront ? img2 : img1} style={{borderRadius:"20px", width: '100%', boxShadow:" rgb(58 58 58 / 77%) 3px 4px 5px 3px",height: '100%', position: 'relative', zIndex: 10 }} alt="" />  
        </Box>

      </Box>
    </Container>
  );
};

export default Printing;
