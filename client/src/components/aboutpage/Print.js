import React, { useState } from 'react';
import { Container, Grid, Slider, Typography, useMediaQuery, Box } from '@mui/material';
import puff from '../../assets/images/printing/puff.jpg';
import packaging from '../../assets/images/about/packaging.mp4';
import styled from '@emotion/styled';
import { DotLottiePlayer, Controls } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';
import packaginganimation from "../../assets/images/about/packing.lottie"

import svg1 from '../../assets/images/about/printing/color.svg'; 
import print from '../../assets/images/about/print.png'; 

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Img = styled.img`
  width:400px;
  height: 400px;
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


export const Print = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <>
      <Container maxWidth={'xl'} sx={{
        marginTop: {xs:'10px'}
      }}>
        <Grid
          container
          marginTop={10}
          height={600}
          spacing={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center'
          }}
        >
        
      <Grid item width={700}>
        <Box marginLeft={1}>
      <Typography marginTop={"100px"} mx={10} variant='h3'
          sx={{
            fontSize: isSmallScreen ? '30px' : '50px',
            fontFamily: 'integral-Regular !important',
            marginBottom: '50px',
          }}>PRINTING<br/>SERVICES</Typography>
          <Typography
                height={100}
                sx={{
                  width: isSmallScreen ? '300px' : '400px',
                  marginLeft: isSmallScreen ? '20px' : '80px',
                  marginBottom: '50px',
                }}
              >
                From screen printing and digital printing to sublimation and heat transfer, our printing services offer a wide range of options to bring your creative vision to life on fabric with vibrant colors and precise detailing. We also specialize in puff printing, vinyl printing, high-density printing, embroidery, and  mboss printing, providing you with even more ways to customize your garments to perfection.
              </Typography>
              </Box>
          </Grid>
          <Grid item>
         <Box 
        height={400} 
        width={500} 
        display="flex" 
        borderRadius={5} 
        sx={{ 
          position:'relative',
          flexDirection: 'column', 
          marginLeft:'60px' , 
          marginTop:'30px',}}>
          
          <img src={svg1} style={{
            position:'absolute',
            zIndex:-1,
          }} />
          <Img src={print}/>
            </Box>  
      </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Print;
