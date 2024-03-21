import React, { Suspense } from "react";
import styled from "@emotion/styled";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import tshirts from '../../assets/images/printing/tshirts.png'; 
import { Typography, useMediaQuery, Box, TextField } from "@mui/material";
import videoSource from '../../assets/images/contactus/tshirts.mp4';
import gifSource from '../../assets/images/contactus/tshirt.gif';
const Section = styled.div`
  height: 100vh;
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
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

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  background-color:#D5BFAA;
  border-radius:40px;
  height:600px;
  margin-top:70px;

  @media only screen and (max-width: 450px) {
    flex: 1;
    width:390px;
    align-items: center;
  }
  @media only screen and (max-width: 380px) {
    width:330px
  }
  @media only screen and (max-width: 330px) {
    width:310px

  }
`;

const Right = styled.div`
  flex: 2;
  position: relative;
  height:700px;


  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
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

const Video = styled.video`
  width: 500px;
  height: 500px;
  object-fit: cover;
  position: absolute;
  top: 100px;
  left: 150px;
  z-index: 1;
`;

export const InputForm = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <>
    <Section>
      <Model >
        <Right>
        {/* <Video autoPlay loop muted>
              <source src={videoSource} type="video/mp4" />
              Your browser does not support the video tag.
            </Video> */}
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#FFF4F1"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          {/* <Img src={tshirts} /> */}
          <Img src={gifSource} loop />
          
        </Right>
        <Left>
          <Typography  mx={10} variant='h3'
          sx={{
            fontSize: isSmallScreen ? '30px' : '50px',
            fontFamily: ['integral-Regular', 'sans-serif'].join(','),
            marginBottom: '50px',
          }}>Contact us </Typography>

          <Box  marginLeft={10} marginRight={10} sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '400px' }}>

            <TextField id="outlined-basic" label="First Name" variant="outlined" sx={{
              width: isSmallScreen ? '300px' : '400px',
              marginLeft: isSmallScreen ?'50px' : '',

            }} />


            <TextField id="outlined-basic" label="Last Name" variant="outlined" sx={{
              width: isSmallScreen ? '300px' : '400px',
              marginLeft: isSmallScreen ?'50px' : '',

            }} />


            <TextField id="outlined-basic" label="Email Address" variant="outlined" sx={{
              width: isSmallScreen ? '300px' : '400px',
              marginLeft: isSmallScreen ?'50px' : '',

            }} />


            <TextField id="outlined-basic" label="Message" variant="outlined" multiline rows={4} sx={{
              width: isSmallScreen ? '300px' : '400px',
              marginLeft: isSmallScreen ?'50px' : '',

            }} />


          </Box>
        </Left>
      </Model>
    </Section>
    </>

  );
};

export default InputForm;
