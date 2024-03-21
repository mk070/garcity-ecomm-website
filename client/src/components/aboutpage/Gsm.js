import React, { useState } from 'react';
import { Container, Grid, Slider, Typography, useMediaQuery, Box } from '@mui/material';
import puff from '../../assets/images/printing/puff.jpg';

export const Gsm = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [sliderValue, setSliderValue] = useState(30);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

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
        <Box bgcolor="gray" height={400} width={370} display="flex">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width={300} // Adjust the width as needed
            height={sliderValue * 4} // Adjust the height based on slider value
            borderRadius={5}
            sx={{
              backgroundImage: `url(${puff})`,
              boxShadow: "0px 10px 30px -5px rgba(0,0,0,0.8)",
              marginLeft:'30px',
              marginTop:'0px'
            }}
          >
            {/* Content inside the centered box */}
          </Box>
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
            marginTop:{xs:'50px',sm:"130px"}
          }}
        >
          GSM
        </Typography>
        <Typography
          height={100}
          sx={{
            width: "400px",
            marginLeft: "80px",
            marginBottom: "50px",
          }}
        >
          Clothing of superior quality is constructed mostly of natural fibers such as cotton, linen, wool, or silk. High-quality apparel is long-lasting, comfy, and meticulously constructed like robust zippers, wooden buttons, additional accessories, but also lining, facing, and excellent stitchwork.
        </Typography>
        <Box marginTop={10} marginLeft={10} sx={{ width: 300 }}>
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            value={sliderValue}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={110}
          />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
