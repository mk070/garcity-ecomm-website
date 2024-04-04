import React, { useState } from 'react';
import { Container, Grid, Slider, Typography, useMediaQuery, Box } from '@mui/material';
import puff from '../../assets/images/printing/puff.jpg';
import fabric from '../../assets/images/about/fabric.jpg';


export const Gsm = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [sliderValue, setSliderValue] = useState(100);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const marks = [
    { value: 100, label: '100' },
    { value: 150, label: '150' },
    { value: 200, label: '200' },
    { value: 250, label: '250' },
    { value: 300, label: '300' },
    { value: 350, label: '350' }, 
  ];

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
          boxShadow: "0px 5px 30px -5px rgba(0,0,0,0.8) inset",flexDirection:'column',overflow:'hidden',
          marginLeft:'100px'

        }}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width={550} // Adjust the height as needed
            height={10 + sliderValue * 1/2} // Adjust the width based on slider value, expanding from center
            borderRadius={5}
            sx={{
              backgroundImage: `url(${fabric})`,
              boxShadow: "0px 10px 30px -5px rgba(0,0,0,0.8)",
              marginLeft:'-30px',
              marginTop:'50px',
              animation: 'wave 1s ease-in-out infinite alternate', // Apply wave animation
              transformOrigin: 'center bottom',
               // Set transform origin to center bottom for wave effect
            }}
          >
            {/* Content inside the centered box */}
          </Box>
          <Typography
          mx={10}
          variant="h3"
          sx={{
            display:'block',
            position:'absolute',
            fontSize: "30px",
            fontFamily: ["integral-Regular", "sans-serif"].join(","),
            marginBottom: "50px",
            marginTop:{xs:'50px',sm:"300px"}
          }}
        >
         GSM : {sliderValue}
        </Typography>
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
          GSM
        </Typography>
        <Typography
          height={100}
          sx={{
            width: "450px",
            marginLeft: "80px",
            marginBottom: "50px",
          }}
        >
          We provide accurate GSM (Grams per Square Meter) services to ensure the desired fabric weight and quality suitable for your garment.
        </Typography>
        <Box marginTop={10} marginLeft={10} sx={{ width: 300 }}>
          <Slider
            aria-label="Temperature"
            defaultValue={80}
            value={sliderValue}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            step={null}
            marks={marks}
            min={100}
            max={350}
          />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Gsm;
