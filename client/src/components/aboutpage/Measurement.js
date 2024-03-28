import React, { useState } from 'react';
import { Container, Grid, Slider, Typography, useMediaQuery, Box, Stack, Button } from '@mui/material';
import tshirtsVideo from '../../assets/images/contactus/tshirts.mp4'; // Assuming the video path is correct
import tshirt from '../../assets/images/contactus/tshirt.gif'; // Assuming the video path is correct
import styled from '@emotion/styled';

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


const Img = styled.img`
  width:350px;
  height: 350px;
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

export const Measurement = () => {
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
              Measurement
            </Typography>
            <Typography
              height={100}
              sx={{
                width: '450px',
                marginLeft: '80px',
                marginBottom: '50px',
              }}
            >
              We offer custom measurements for a perfect fit, ensuring your garment is tailored precisely to your body shape and size,enhancing comfort and style.
            </Typography>
            <Stack marginLeft={10} spacing={2} direction="row">
              <Button variant="contained" sx={{
                width:'50px',height:'60px',borderRadius:'60px',backgroundColor:'#FFF4F1',color:'black','&:hover':{
                    backgroundColor:'#DF9573'}, fontWeight:'900',
              }}>S</Button>
              <Button variant="contained" sx={{
                width:'50px',height:'60px',borderRadius:'60px',backgroundColor:'#FFF4F1',color:'black','&:hover':{
                    backgroundColor:'#DF9573'},fontWeight:'900',
              }}>L</Button>
              <Button variant="contained" sx={{
                width:'50px',height:'60px',borderRadius:'60px',backgroundColor:'#FFF4F1',color:'black','&:hover':{
                    backgroundColor:'#DF9573'},fontWeight:'900', 
              }}>XL</Button>
              <Button variant="contained" sx={{
                width:'50px',height:'60px',borderRadius:'60px',backgroundColor:'#FFF4F1',color:'black', '&:hover':{
                    backgroundColor:'#DF9573'
                },fontWeight:'900',
              }}>XLL</Button>
      
            </Stack>
          </Grid>
          <Grid item>
            <Box bgcolor="#fff" height={400} width={500} display="flex" borderRadius={5} sx={{ boxShadow: '0px 5px 30px -5px rgba(0,0,0,0.8)', flexDirection: 'column', overflow: 'hidden',marginRight:'100px' }}>
              <Video src={tshirtsVideo} controls loop/>
              {/* <Img src={tshirt} /> */}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Measurement;
