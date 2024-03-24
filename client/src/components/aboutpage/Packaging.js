import React, { useState } from 'react';
import { Container, Grid, Slider, Typography, useMediaQuery, Box } from '@mui/material';
import puff from '../../assets/images/printing/puff.jpg';
import fabric from '../../assets/images/about/fabric.jpg';


export const Packaging = () => {
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
            justifyContent: 'space-around',
          }}
        >
         <Grid item>
        <Box bgcolor="#fff" height={400} width={500} display="flex" borderRadius={5} sx={{
          boxShadow: "0px 5px 30px -5px rgba(0,0,0,0.8) ",flexDirection:'column',overflow:'hidden',

        }}>
        </Box>
      </Grid>
      <Grid item width={700}>
        <Typography
          mx={10}
          variant="h3"
          sx={{
            fontSize: "50px",
            fontFamily: ["integral-Regular", "sans-serif"].join(","),
            marginBottom: "50px",
            marginTop:{xs:'50px',sm:"50px"}
          }}
        >
          packaging
        </Typography>
        <Typography
          height={100}
          sx={{
            width: "450px",
            marginLeft: "80px",
            marginBottom: "50px",
          }}
        >
         Experience personalized packaging options tailored to your brand's identity and preferences, adding a unique touch to every order and leaving a lasting impression on your customers.
        </Typography>
        <Box marginTop={10} marginLeft={10} sx={{ width: 300 }}>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Packaging;
