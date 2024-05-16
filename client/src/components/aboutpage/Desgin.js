// import React, { useState } from 'react';
// import { Box, Container, Typography } from '@mui/material';
// // import tshirt from '../../assets/images/about/tshirt.svg';
// import deying from "../../assets/images/about/dyeing.png"
// // Change to your SVG t-shirt image
// import svg1 from '../../assets/images/about/printing/color.svg'; 
// import styled from '@emotion/styled';


// const Img = styled.img`
// width:250px;
// height: 250px;
// object-fit: contain;
// position: absolute;
// top: 0;
// bottom: 0;
// left: 0;
// right: 0;
// margin: auto;
// animation: animate 2s infinite ease alternate;

// @media only screen and (max-width: 768px) {
//   width: 300px;
//   height: 300px;
// }

// @keyframes animate {
//   to {
//     transform: translateY(20px);
//   }
// }
// `;



// const Colors = () => {


//   return (
//     <>
    
//     <Container maxWidth={'xl'} 
//       sx={{
//          marginTop: { xs: '10px', sm:"130px" }, 
//          display:'flex',
//          flexDirection: { xs: 'column',sm:'row-reverse' },
//          justifyContent: 'center',
//          alignItems:'center',
//          gap:'100px' }}>
//         <Box>
//           <Typography
//                 mx={10}
//                 variant="h3"
//                 sx={{
//                   fontSize: '40px',
//                   fontFamily: 'integral-Regular !important',
//                   marginBottom: '50px',
//                   marginTop: { xs: '50px', sm: '50px' },
//                 }}
//               >
//                 Dyeing
//           </Typography>
//           <Typography
//                 height={100}
//                 sx={{
//                   width: '450px',
//                   marginLeft: '80px',
//                   marginBottom: '50px',
//                 }}
//               >
//                 Our dyeing services offer vibrant and
//                 long-lasting colors, enhancing the appeal
//                 of your clothing products. Using Pantone
//                 color codes, we ensure precision and
//                 accuracy throughout the dyeing process,
//                 resulting in consistent and stunning color
//                 outcomes.
//           </Typography>
//         </Box>
            
//           <Box sx={{
//               height:'500px',
//               width:'500px',
//               position:'relative'
//             }}>
//             <img src = {svg1}/>
//             <Img src={deying} />
//             </Box> 
          
        
//       </Container>
//     </>
//   );
// };



// export default Colors;

import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, useMediaQuery, Button } from '@mui/material';
import img1 from "../../assets/images/about/5 SERVICES IMAGES/DESIGNING2.avif";
import img2 from "../../assets/images/about/5 SERVICES IMAGES/DESIGNING.avif";

const Design = () => {
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
 // f6ded7
  return (
    <Container maxWidth="xl" position='sticky' sx={{pt:{xs:'20px'}, backgroundColor: "#FFF4F1", position: 'sticky', top:{sm:'80px',xs:'10px'}, height: containerHeight, marginTop: { xs: '10px' }, display: 'flex', flexDirection: { xs: 'column-reverse', sm: 'row-reverse' }, justifyContent: 'center', alignItems: 'center', gap: { xs: '1px', sm: '0px' } }}>
      
      <Box sx={{ height: { xs: '100%', sm: '100%' }, width: { sm: "100%" }, pt: { sm: "50px" }, pr: { sm: "120px" } }}>
        <Typography mx={1} variant="h3" sx={{ fontSize: {sm:'40px',xs:'20px'}, fontFamily: 'integral-Regular !important',  margin: { sm: '50px 0' ,xs:'20px 0'} }}>
          DESIGNING
        </Typography>
        <Typography height={isExpanded || isSmallScreen ? '100%' : '100%'}  overflow="hidden" sx={{lineHeight:{sm:'34px'}, fontSize:{sm:'18px',xs:'16px'},width: { xs: '100%', sm: '100%' }, marginBottom: '50px' }}>
        {`From conceptualization to realization, our experienced team is committed to
        transforming your ideas into stunning realities. We offer a full spectrum of design
        services, guiding you through every stage of the process with expert assistance.
        Whether it involves crafting intricate tech packs or refining your creative vision, we're
        here to help you bring your designs to life.`}
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
</Box>

<Box sx={{ borderRadius: "20px", width: { sm: '380px' ,xs:'210px'}, height: { sm: '50%' ,xs:"63%"}, position: 'absolute', top: {sm:'70px',xs:'70px'}, left: {sm:'130px',xs:"130px"} }}>
  <img src={isFront ? img2 : img1} style={{ borderRadius: "20px", width: '100%', boxShadow: " rgb(58 58 58 / 77%) 3px 4px 5px 3px", height: '100%', position: 'relative', zIndex: 10 }} alt="" />
</Box>

</Box>
    </Container>
  );
};

export default Design;

