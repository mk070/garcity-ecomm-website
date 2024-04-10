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
import { Container, Typography, Box } from '@mui/material';
import img1 from "../../assets/images/about/5 SERVICES IMAGES/DESIGNING2.png";
import img2 from "../../assets/images/about/5 SERVICES IMAGES/DESIGNING.png";

const Design = () => {
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
    <Container maxWidth="xl" position='sticky' sx={{backgroundColor:"white",position: 'sticky', top: 80 ,height:{sm:'75vh'},marginTop: { xs: '10px' }, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center', alignItems: 'center', gap: '100px' }}>
      
      <Box>
        <Typography mx={10} variant="h3" sx={{ fontSize: '40px', fontFamily: 'integral-Regular !important', marginBottom: '50px', marginTop: { xs: '50px', sm: '50px' } }}>
          DESIGNING
        </Typography>
        <Typography height={100} sx={{ width: '450px', marginLeft: '80px', marginBottom: '50px' }}>
        From concept to tech pack, entrust us with bringing your ideas to life.
Benefit from expert design services tailored to your unique vision, guaranteeing a
stunning result.
  </Typography>
      </Box>

      <Box height={400} width={500}  position={'relative'} sx={{pt:{sm:'20px'},display: 'flex', justifyContent:{sm:"center"}, alignItems:{sm:"center"},flexDirection: { sm: 'column' }, marginRight: '100px' }}>
       
        <Box sx={{borderRadius:"20px", width: { sm: '50%' }, height: { sm: '60%' },position: 'absolute', top: 140, left: 180 }}>
          <img src={currentImage} style={{borderRadius:"20px", width: '100%', boxShadow:" rgb(58 58 58 / 77%) 3px 4px 5px 3px",height: '100%', position: 'relative', zIndex: 1 }} alt="" /> 
        </Box>

        <Box sx={{borderRadius:"20px", width: { sm: '50%' }, height: { sm: '60%' }, position: 'absolute', top: 70, left: 100 }}>
          <img src={isFront ? img2 : img1} style={{borderRadius:"20px", width: '100%', boxShadow:" rgb(58 58 58 / 77%) 3px 4px 5px 3px",height: '100%', position: 'relative', zIndex: 10 }} alt="" />  
        </Box>

      </Box>
    </Container>
  );
};

export default Design;

