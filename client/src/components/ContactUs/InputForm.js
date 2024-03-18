import React, { Suspense } from "react";
import styled from "@emotion/styled";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import tshirts from '../../assets/images/printing/tshirts.png'; 
import timing from '../../assets/images/contactus/clock.png'
import contact from '../../assets/images/contactus/contact.png'
import location from '../../assets/images/contactus/location.png'
import { Typography, useMediaQuery, Box, TextField, Container, Card, Grid, } from "@mui/material";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


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

export const InputForm = () => {

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <>
    <Section>
      <Model >
        <Right>
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
          <Img src={tshirts} />
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
  
  <Box mx={10} marginTop={5}   >
    <Typography
                height={100}
                sx={{
                  width: isSmallScreen ? '300px' : '100%',
                  justifyContent:"center",
                  textAlign:"center"
                }}
              >
                Clothing of superior quality is constructed mostly of natural fibers such as cotton, linen, wool, or silk. High-quality apparel is long-lasting, comfy, and meticulously constructed like robust zippers, wooden buttons, additional accessories, but also lining, facing, and excellent stitchwork
              </Typography>
    </Box>





      <Container maxWidth={"xl"} sx={{
        marginTop:"100px",
      }}>

        <Grid container spacing={3} justifyContent={"space-around"} marginBottom={15}> 
        <Grid item marginBottom={5} sx={{
          position:"relative",
          
        }}>
          <img src={location} style={{
            position:"absolute",    
            height:"100px",
            top:"-30px",
            left:isSmallScreen? "130px":"150px",

          }} />
        <Card sx={{  width:isSmallScreen? "300px":"350px",
                    height:isSmallScreen? "280px":"300px",
                    borderRadius: "20px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    alignItems: "center", // Align items horizontally in the center
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    backgroundColor:"#FFF4F1",
                    
                  }}>
                <Typography fontWeight={900} variant={'h5'}>Location</Typography>
                <Typography
                  marginTop={1}
                  p={3}
                height={100}
                sx={{
                  width: isSmallScreen ? '300px' : '100%',
                  justifyContent:"center",
                  textAlign:"center"
                }}
              >1/354 H Asm garden Ksn puram<br/> 3rd street,semmipalayam palladam,<br/><br/> 
              Tiruppur - 641662 
              </Typography>
                </Card>
        </Grid>
        <Grid item sx={{
          position:"relative",
        }}>
          <img src={contact} style={{
            position:"absolute",    
            height:"70px",
            top:"-10px",
            left:isSmallScreen?"140px":"160px"            
          }} />
        <Card sx={{  width:isSmallScreen? "300px":"350px",
                    height: isSmallScreen?"280px":"300px",
                    borderRadius: "20px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    alignItems: "center", // Align items horizontally in the center
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center", 
                    backgroundColor:"#FFF4F1"

                  }}>
                <Typography fontWeight={900} variant={'h5'}>Contact Us </Typography>
                <Typography
                  marginTop={1}
                  p={3}
                height={100}
                sx={{
                  width: isSmallScreen ? '300px' : '100%',
                  justifyContent:"center",
                  textAlign:"center"
                }}
              ><span>+91 7904545341</span> <br/><br/> remindme.garments@gmail.com
              </Typography>
                </Card>
        </Grid>
        <Grid item sx={{
          position:"relative",
        }}>
          <img src={timing} style={{
            position:"absolute",    
            height:"70px",
            top:"-10px",
            left:"170px"            
          }} />
        <Card sx={{ width:isSmallScreen? "300px":"350px",
                    height: isSmallScreen?"280px":"300px",
                    borderRadius: "20px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    alignItems: "center", 
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    backgroundColor:"#FFF4F1"

                  }}>
                <Typography fontWeight={900} variant={'h5'}>Timings</Typography>
                <Typography
                  marginTop={1}
                  p={2}
                height={100}
                fontWeight={400}
                sx={{
                  width: isSmallScreen ? '300px' : '100%',
                  justifyContent:"center",
                  textAlign:"center"
                }}
              >Monday to Sunday <br/><strong> 9Am to 6Pm</strong> <br/><br/> Sunday:Holiday
              </Typography>
                </Card>
        </Grid>
        </Grid>
        <div style={{ height: '50vh', width: '100%' , marginBottom:"100px"}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>


      </Container>
    </>

  );
};

export default InputForm;
