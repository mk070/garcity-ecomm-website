import React, { useState } from 'react';
import { Container, Typography, Box, Button, useMediaQuery } from '@mui/material';
import img2 from "../../assets/images/about/5 SERVICES IMAGES/FABRICATION2.png";
import img1 from "../../assets/images/about/5 SERVICES IMAGES/FABRICATION.png";

const Fabric = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [isExpanded, setIsExpanded] = useState(false); // State to track text expansion
  const [containerHeight, setContainerHeight] = useState(isSmallScreen ? '650px' : '85vh'); // Initial height

  const handleExpandCollapse = () => {
    setIsExpanded(!isExpanded); // Toggle expanded state
    setContainerHeight(isExpanded ? (isSmallScreen ? '650px' : '85vh') : '1000px'); // Update height based on expansion
  };

  return (
    <Container maxWidth="xl" position='sticky' sx={{ backgroundColor: "white", position: 'sticky', top: 80, height: containerHeight, marginTop: { xs: '10px' }, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center', alignItems: 'center', gap: { xs: '1px', sm: '100px' } }}>

      <Box sx={{ height: { xs: '100%', sm: '100%' }, width: { sm: "100%" }, pt: { sm: "50px" }, pl: { sm: "20px" } }}>
        <Typography mx={1} variant="h3" sx={{ fontSize: '40px', fontFamily: 'integral-Regular !important', marginBottom: '50px', marginTop: { xs: '50px', sm: '50px' } }}>
          FABRICATION
        </Typography>
        <Typography height={isExpanded || !isSmallScreen ? 'auto' : 100} overflow="hidden" sx={{ width: { xs: '80%', sm: '100%' }, marginLeft: '20px', marginBottom: '50px' }}>
          {`At our facility, we meticulously craft fabrics to your specifications, ensuring exceptional
        quality and durability. Choose from a diverse range of materials, including cotton,
        polyester, and blends, tailored to your unique requirements. Our state-of-the-art
        equipment and techniques guarantee precise color, pattern, and texture adjustments,
        resulting in fabrics of superior quality and consistency. Embracing sustainable practices,
        we prioritize eco-friendly production methods and materials throughout the fabrication
        process. With a robust supply chain and efficient production processes, we guarantee
        timely delivery of your fabric orders, regardless of size or scope.`}
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
          <img src={img1} style={{ borderRadius: "20px", width: '100%', boxShadow: " rgb(58 58 58 / 77%) 3px 4px 5px 3px", height: '100%', position: 'relative', zIndex: 1 }} alt="" />
        </Box>

        <Box sx={{ borderRadius: "20px", width: { sm: '450px' }, height: { sm: '60%' }, position: 'absolute', top: 70, left: 130 }}>
          <img src={img2} style={{ borderRadius: "20px", width: '100%', boxShadow: " rgb(58 58 58 / 77%) 3px 4px 5px 3px", height: '100%', position: 'relative', zIndex: 10 }} alt="" />
        </Box>

      </Box>
    </Container>
  );
};

export default Fabric;
