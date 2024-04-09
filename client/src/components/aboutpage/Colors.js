import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
// import tshirt from '../../assets/images/about/tshirt.svg';
import deying from "../../assets/images/about/dyeing.png"
// Change to your SVG t-shirt image
import svg1 from '../../assets/images/about/printing/color.svg'; 
import styled from '@emotion/styled';


const Img = styled.img`
width:250px;
height: 250px;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
animation: animate 2s infinite ease alternate;

@media only screen and (max-width: 768px) {
  width: 300px;
  height: 300px;
}

@keyframes animate {
  to {
    transform: translateY(20px);
  }
}
`;



const Colors = () => {


  return (
    <>
    
    <Container maxWidth={'xl'} 
      sx={{
         marginTop: { xs: '10px', sm:"130px" }, 
         display:'flex',
         flexDirection: { xs: 'column',sm:'row-reverse' },
         justifyContent: 'center',
         alignItems:'center',
         gap:'100px' }}>
        <Box>
          <Typography
                mx={10}
                variant="h3"
                sx={{
                  fontSize: '40px',
                  fontFamily: 'integral-Regular !important',
                  marginBottom: '50px',
                  marginTop: { xs: '50px', sm: '50px' },
                }}
              >
                Dyeing
          </Typography>
          <Typography
                height={100}
                sx={{
                  width: '450px',
                  marginLeft: '80px',
                  marginBottom: '50px',
                }}
              >
                Our dyeing services offer vibrant and
                long-lasting colors, enhancing the appeal
                of your clothing products. Using Pantone
                color codes, we ensure precision and
                accuracy throughout the dyeing process,
                resulting in consistent and stunning color
                outcomes.
          </Typography>
        </Box>
            
          <Box sx={{
              height:'500px',
              width:'500px',
              position:'relative'
            }}>
            <img src = {svg1}/>
            <Img src={deying} />
            </Box> 
          
        
      </Container>
    </>
  );
};



export default Colors;
