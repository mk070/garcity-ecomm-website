import React, { useState ,useEffect} from 'react';
import { Container, Typography, Box, Button, useMediaQuery } from '@mui/material';
import img2 from "../../assets/images/about/5 SERVICES IMAGES/FABRICATION2.avif";
import img1 from "../../assets/images/about/5 SERVICES IMAGES/FABRICATION.avif";
import img1Small from "../../assets/images/about/5 SERVICES IMAGES/FABRICATION_small.avif";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const Fabric = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [isExpanded, setIsExpanded] = useState(false); // State to track text expansion
  const [containerHeight, setContainerHeight] = useState(isSmallScreen ? '650px' : '85vh'); // Initial height
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

  const handleExpandCollapse = () => {
    setIsExpanded(!isExpanded); // Toggle expanded state
    setContainerHeight(isExpanded ? (isSmallScreen ? '650px' : '85vh') : '1000px'); // Update height based on expansion
  };

  return (
    <Container maxWidth="xl" position='sticky' sx={{ backgroundColor: "white", position: 'sticky', top:{sm:'80px',xs:'100px'}, height: containerHeight,pt:{xs:'20px'}, marginTop: { xs: '10px' }, display: 'flex', flexDirection: { xs: 'column-reverse', sm: 'row' }, justifyContent: 'center', alignItems: 'center', gap: { xs: '1px', sm: '100px' } }}>

      <Box sx={{ height: { xs: '100%', sm: '100%' }, width: { sm: "100%" }, pt: { sm: "50px" }, pl: { sm: "120px" },p:{xs:'0 10px'} }}>
        <Typography mx={1} variant="h3" sx={{ fontSize: {sm:'40px',xs:'20px'}, fontFamily: 'integral-Regular !important',  margin: { sm: '50px 0' ,xs:'20px 0'} }}>
          FABRICATION
        </Typography>
        <Typography height={isExpanded || isSmallScreen ? '100%' : '100%'}  overflow="hidden" sx={{lineHeight:{sm:'34px'}, fontSize:{sm:'18px',xs:'16px'},width: { xs: '100%', sm: '100%' }, marginBottom: '50px' }}>
          {`At our facility, we meticulously craft fabrics to your specifications, ensuring exceptional
        quality and durability. Choose from a diverse range of materials, including cotton,
        polyester, and blends, tailored to your unique requirements. Our state-of-the-art
        equipment and techniques guarantee precise color, pattern, and texture adjustments,
        resulting in fabrics of superior quality and consistency. `}
        </Typography>
        {/* <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Button variant="outlined" onClick={handleExpandCollapse}
            sx={{
              marginLeft: '20px',
              top: '-40px'
            }}>{isExpanded ? 'Collapse' : 'Expand'}</Button>
        </Box> */}
      </Box>

      <Box position={'relative'} sx={{ height: { xs: '70%', sm: '100%' }, width: { xs: '110%', sm: "100%" }, display: 'flex', justifyContent: { sm: "center" }, alignItems: { sm: "center" }, flexDirection: { xs: 'column', sm: 'column' }, marginRight: { xs: '120px', sm: '100px' }, marginBottom: {sm:'', xs: '10px' }, top:{xs:'-20px',sm:'0px'} }}>

        <Box sx={{ borderRadius: "20px", width: { sm: '380px',xs:'210px' }, height: { sm: '50%',xs:"63%" }, position: 'absolute', top: {sm:'140px',xs:"100px"}, left: {sm:'200px',xs:'160px'} }}>
      
          <img src={currentImage} style={{ borderRadius: "20px", width: '100%', boxShadow: " rgb(58 58 58 / 77%) 3px 4px 5px 3px", height: '100%', position: 'relative', zIndex: 1 }} alt="" /> 
          
          {/* <LazyLoadImage src={currentImage} PlaceholderSrc={img1Small} effect="blur" loading='lazy' sx = {{ borderRadius: "20px", width: '100%', boxShadow: " rgb(58 58 58 / 77%) 3px 4px 5px 3px", height: '100%', position: 'relative', zIndex: 1 }}/> */}

        </Box>

        <Box sx={{ borderRadius: "20px", width: { sm: '380px' ,xs:'210px'}, height: { sm: '50%' ,xs:"63%"}, position: 'absolute', top: {sm:'70px',xs:'70px'}, left: {sm:'130px',xs:"130px"} }}>
          <img src={isFront ? img2 : img1} style={{ borderRadius: "20px", width: '100%', boxShadow: " rgb(58 58 58 / 77%) 3px 4px 5px 3px", height: '100%', position: 'relative', zIndex: 10 }} alt="" />

          {/* <LazyLoadImage src={isFront ? img2 : img1} PlaceholderSrc={img1Small} effect="blur" loading='lazy' sx = {{ borderRadius: "20px", width: '100%', boxShadow: " rgb(58 58 58 / 77%) 3px 4px 5px 3px", height: '100%', position: 'relative', zIndex: 1 }}/> */}
        </Box>

      </Box>
    </Container>
  );
};

export default Fabric;
