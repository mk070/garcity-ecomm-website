import React, { useState } from 'react';
import { Container, Grid, Slider, Typography, useMediaQuery, Box, Stack, Button } from '@mui/material';
import tshirt from '../../assets/images/mensWear/mens.png'; // Assuming the video path is correct
import styled from '@emotion/styled';
import fabric from '../../assets/images/about/fabric.png'; 
import svg2 from '../../assets/images/about/printing/Fabric.svg'; 


const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

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
export const Fabric = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [sliderValue, setSliderValue] = useState(30);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };
  return (
    <>
      <Container maxWidth={'xl'} sx={{ marginTop: { xs: '10px' } }}>
        <Grid
          container
          marginTop={10}
          height={600}
          spacing={2}
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <Grid item width={700} marginTop={10}>
            <Typography
              mx={10}
              variant="h3"
              sx={{
                fontSize: '50px',
                fontFamily: 'integral-Regular !important',
                marginBottom: '50px',
                marginTop: { xs: '50px', sm: '50px' },
              }}
            >
              Fabric
            </Typography>
            <Typography
              height={100}
              sx={{
                width: '450px',
                marginLeft: '80px',
                marginBottom: '50px',
              }}
            >
              We specialize in crafting garments with precision and expertise, ensuring top notch quality and durability. We make fabrics in 100% cotton, organic cotton, Supima cotton, cotton-poly blend, polyester, polyester-spandex blend, modal, and viscose.
            </Typography>
            
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
          marginRight:'100px',}}>
          
          <img src={svg2} style={{
            zIndex:-1,
          }} />
          <Img src={fabric}/>
            </Box>  
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Fabric;
