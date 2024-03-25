import React, { useState } from 'react';
import { Container, Grid, Slider, Typography, useMediaQuery, Box, Stack, Button } from '@mui/material';
import tshirt from '../../assets/images/mensWear/mens.png'; // Assuming the video path is correct
import styled from '@emotion/styled';

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
          <Grid item width={700}>
            <Typography
              mx={10}
              variant="h3"
              sx={{
                fontSize: '50px',
                fontFamily: ['integral-Regular', 'sans-serif'].join(','),
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
              Explore our fabric options, including 100% cotton, organic cotton, Supimacotton, cotton blends, polyester, viscose, and custom fabric choices, ensuring versatility for your garment needs.
            </Typography>
            
          </Grid>
          <Grid item>
            <Box bgcolor="#fff" height={400} width={500} display="flex" borderRadius={5} sx={{ boxShadow: '0px 5px 30px -5px rgba(0,0,0,0.8)', flexDirection: 'column', overflow: 'hidden',marginRight:'100px' , backgroundImage:`url(${tshirt})`}}>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Fabric;
