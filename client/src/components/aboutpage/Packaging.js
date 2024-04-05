import React, { Suspense, useState } from 'react';
import { Container, Grid, Slider, Typography, useMediaQuery, Box, Stack, Button } from '@mui/material';
import tshirtsVideo from '../../assets/images/contactus/tshirts.mp4'; // Assuming the video path is correct
import tshirts from '../../assets/images/contactus/tshirt.gif'; // Assuming the video path is correct
import packaging from '../../assets/images/about/packaging.png'; 
import styled from '@emotion/styled';
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
import svg4 from '../../assets/images/about/printing/package.svg'; 


const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Model = styled.div`
  height: 100%;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Img = styled.img`
  width:550px;
  height: 550px;
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

export const Packaging = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [sliderValue, setSliderValue] = useState(30);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };
  return (
    <>
<Container maxWidth={'xl'} 
      sx={{
         marginTop: { xs: '10px' }, 
         display:'flex',
         flexDirection: { xs: 'column',sm:'row' },
         justifyContent: 'center',
         alignItems:'center', }}>
          

          <Box
           sx={{
            height:'500px',
            width:'500px',
            position:'relative'
           }}>
            <img src = {svg4}/>
          <Img src={packaging} />
          </Box>

          <Box>
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
              Packaging
            </Typography>
            <Typography
              height={100}
              sx={{
                width: '450px',
                marginLeft: '80px',
                marginBottom: '50px',
              }}
            >
             Experience personalized packaging options tailored to your brand's identity and preferences, adding a unique touch to every order and leaving a lasting impression on your customers.
            </Typography>
          </Box>
          {/* <Grid
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
           <Box
           sx={{
            height:'500px',
            width:'500px',
            position:'relative'
           }}>
              <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="gray"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <img src = {svg4}/>
          <Img src={packaging} />
           </Box>
          </Grid>
          <Grid item width={700}>
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
              We offer custom measurements for a perfect fit, ensuring your garment is tailored precisely to your body shape and size, enhancing comfort  and style.

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
        </Grid> */}
      </Container>
    </>
  );
};

export default Packaging;
