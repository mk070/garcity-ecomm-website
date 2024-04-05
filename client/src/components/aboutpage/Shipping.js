import React, { useState } from 'react';
import { Container, Grid, Slider, Typography, useMediaQuery, Box } from '@mui/material';
import puff from '../../assets/images/printing/puff.jpg';
import packaging from '../../assets/images/about/packaging.mp4';
import styled from '@emotion/styled';
import { DotLottiePlayer, Controls } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';
import packaginganimation from "../../assets/images/about/packing.lottie"
import svg5 from '../../assets/images/about/printing/shipping.svg'; 
import ship from '../../assets/images/about/shipping.png'; 



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


export const Shipping = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <>
     <Container maxWidth={'xl'} 
      sx={{
         marginTop: { xs: '100px' }, 
         display:'flex',
         flexDirection: { xs: 'column',sm:'row' },
         justifyContent: 'center',
         alignItems:'center',
         gap:'100px'
         }}>

      <Box marginLeft={10}>
      <Typography  mx={10} variant='h3'
          sx={{
            fontSize: isSmallScreen ? '30px' : '40px',
            fontFamily: 'integral-Regular !important',
            marginBottom: '50px',
          }}>Shipping</Typography>
          <Typography
                height={100}
                sx={{
                  width: isSmallScreen ? '300px' : '400px',
                  marginLeft: isSmallScreen ? '20px' : '80px',
                  marginBottom: '50px',
                }}
              >
                Facilitating timely and reliable shipping services worldwide to deliver your products to their destination safely and promptly.
                </Typography>
              </Box>

              <Box 
        height={400} 
        width={500} 
        display="flex" 
        borderRadius={5} 
        sx={{ 
          position:'relative',
          flexDirection: 'column', 
          marginLeft:'60px',
          marginBottom:'130px'}}>
          
          <img src={svg5} style={{
            position:'absolute',
            zIndex:-1,
          }} />
          <Img src={ship}/>
            </Box>  
        {/* <Grid
          container
          height={600}
          spacing={2}
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
            <Grid item width={700}>
        <Box marginLeft={10}>
      <Typography marginTop={"100px"} mx={10} variant='h3'
          sx={{
            fontSize: isSmallScreen ? '30px' : '50px',
            fontFamily: 'integral-Regular !important',
            marginBottom: '50px',
          }}>Shipping</Typography>
          <Typography
                height={100}
                sx={{
                  width: isSmallScreen ? '300px' : '400px',
                  marginLeft: isSmallScreen ? '20px' : '80px',
                  marginBottom: '50px',
                }}
              >
                Facilitating timely and reliable shipping services worldwide to deliver your products to their destination safely and promptly.
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
          
          <img src={svg5} style={{
            position:'absolute',
            zIndex:-1,
          }} />
          <Img src={ship}/>
            </Box>  
      </Grid>
     
        </Grid> */}
      </Container>
    </>
  );
};

export default Shipping;
