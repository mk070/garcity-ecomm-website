import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, useMediaQuery, Button } from '@mui/material';
import img1 from "../../assets/images/about/5 SERVICES IMAGES/CUSTOM PACKAGING2.png";
import img2 from "../../assets/images/about/5 SERVICES IMAGES/CUSTOM PACKAGING.png";

const Packaging = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [isExpanded, setIsExpanded] = useState(false); // State to track text expansion
  const [containerHeight, setContainerHeight] = useState(isSmallScreen ? '650px' : '85vh'); // Initial height

  const handleExpandCollapse = () => {
    setIsExpanded(!isExpanded); // Toggle expanded state
    setContainerHeight(isExpanded ? (isSmallScreen ? '650px' : '85vh') : '1000px'); // Update height based on expansion
  };
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
// /#ffcec0
  return (
    <Container maxWidth="xl" position='sticky' sx={{ backgroundColor: "white", position: 'sticky', top:{sm:'80px',xs:'120px'}, height: containerHeight, marginTop: { xs: '10px' }, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center', alignItems: 'center', gap: { xs: '1px', sm: '100px' } }}>
      
       <Box sx={{ height: { xs: '100%', sm: '100%' }, width: { sm: "100%" }, pt: { sm: "50px" }, pl: { sm: "20px" } }}>
        <Typography mx={1} variant="h3" sx={{ fontSize: '40px', fontFamily: 'integral-Regular !important', marginBottom: '50px', marginTop: { xs: '50px', sm: '50px' } }}>
        CUSTOM PACKING
        </Typography>
        <Typography height={isExpanded || !isSmallScreen ? 'auto' : 100} overflow="hidden" sx={{ width: { xs: '80%', sm: '100%' }, marginLeft: '20px', marginBottom: '50px' }}>
         {` Elevate your brand's presentation with our bespoke packaging solutions, meticulously designed to leave a lasting impression on your discerning customers. We offer an extensive selection of sustainable packaging options, carefully curated to align with your brand's identity and values. From eco-friendly materials to customized designs, we'll collaborate with you to create packaging that not only showcases your commitment to sustainability but also reinforces your brand message. Enhance the unboxing experience and delight your customers with our premium packaging solutions that elevate the perceived value of your products.`}
        </Typography>
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Button variant="outlined" onClick={handleExpandCollapse}
            sx={{
              marginLeft: '20px',
              top: '-40px'
            }}>{isExpanded ? 'Collapse' : 'Expand'}</Button>
        </Box>
      </Box>

      <Box position={'relative'} sx={{ height: { xs: '110%', sm: '100%' }, width: { xs: '110%', sm: "100%" }, display: 'flex', justifyContent: { sm: "center" }, alignItems: { sm: "center" }, flexDirection: { xs: 'column', sm: 'column' }, marginRight: { xs: '120px', sm: '100px' }, marginBottom: { xs: '100px' }, top:{xs:'-40px',sm:'0px'} }}>
       
         <Box sx={{ borderRadius: "20px", width: { sm: '450px' }, height: { sm: '60%' }, position: 'absolute', top: 140, left: 200 }}>
          <img src={currentImage} style={{borderRadius:"20px", width: '100%', boxShadow:" rgb(58 58 58 / 77%) 3px 4px 5px 3px",height: '100%', position: 'relative', zIndex: 1 }} alt="" /> 
        </Box>

        <Box sx={{borderRadius:"20px", width: { sm: '450px' }, height: { sm: '60%' }, position: 'absolute', top: 70, left: 110 }}>
          <img src={isFront ? img2 : img1} style={{borderRadius:"20px", width: '100%', boxShadow:" rgb(58 58 58 / 77%) 3px 4px 5px 3px",height: '100%', position: 'relative', zIndex: 10 }} alt="" />  
        </Box>

      </Box>
    </Container>
  );
};

export default Packaging;
