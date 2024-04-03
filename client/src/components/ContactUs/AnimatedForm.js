import React, { useState, useEffect, useRef } from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';
import styled from '@emotion/styled';
import { Typography, useMediaQuery, Container, Box, TextField, Button } from '@mui/material';
import dtf from '../../assets/images/printing/dt.webp'; 
import emboss from '../../assets/images/printing/emboss.jpeg'; 
import hd from '../../assets/images/printing/hd.jpg'; 
import puff from '../../assets/images/printing/puff.jpg'; 
import screen from '../../assets/images/printing/screen.jpg'; 
import embroidry from '../../assets/images/printing/embroidry.jpg'; 

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  object-fit: contain;
  transition: transform 0.3s ease-out; 
`;

export const AnimatedForm = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const multilineRef = useRef(null);

  const handleRadioChange = (event) => {
    if (event.target.value === 'Other') {
      multilineRef.current.focus();
    }
  };
  useEffect(() => {
    const parallax = (e) => {
      console.log('Mousemove event:', e.clientX, e.clientY);

      document.querySelectorAll(".object").forEach(function (move) {
        var moving_value = move.getAttribute('data-value');
        console.log('Data value:', moving_value);
        
        var x = (e.clientX * moving_value) / 250;
        var y = (e.clientY * moving_value) / 250;
        console.log('Transform values:', x, y);

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
      });
    };

    document.addEventListener("mousemove", parallax);

    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      <Container sx={{
        display: 'flex',
        position:'relative',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '600px',
        marginTop: '100px',
      }}>
         <img  src={puff} class="object" data-value='-6' style={{position: 'absolute', top: '0',height:'200px',width:'200px', left:'10px', borderRadius:'10px',boxShadow: "rgba(0, 0, 0, 1) 0px 5px 15px", objectFit:'cover'
        }} />
         {/* <img  src={hd} class="object" data-value='10' style={{position: 'absolute', top: '100px',height:'120px',width:'auto', left:'120px', borderRadius:'10px',zIndex:-3,
        }} /> */}
        
        {/* front */}

         <img  src={dtf} class="object" data-value='-4' style={{position: 'absolute', top: '0',height:'200px',width:'200px', right:'10px', borderRadius:'10px',boxShadow: "rgba(0, 0, 0, 1) 0px 5px 15px", objectFit:'cover'
        }} />
         {/* <img  src={hd} class="object" data-value='10' style={{position: 'absolute', top: '100px',height:'120px',width:'auto', right:'120px', borderRadius:'10px',zIndex:-1, boxShadow: "rgba(0, 0, 0, 1) 0px 5px 15px"
        }} /> */}

        {/* right */}


         <img  src={screen} class="object" data-value='-5' style={{position: 'absolute', bottom: '10px',height:'200px',width:'200px', left:'10px', borderRadius:'10px',boxShadow: "rgba(0, 0, 0, 1) 0px 5px 15px",objectFit:'cover'

        }} />
         {/* <img  src={hd} class="object" data-value='10' style={{position: 'absolute', bottom: '130px',height:'120px',width:'auto', left:'150px', borderRadius:'10px',zIndex:-1,boxShadow: "rgba(0, 0, 0, 1) 0px 5px 15px"
        }} /> */}

        {/* bottom left */}
         <img  src={embroidry} class="object" data-value='-7' style={{position: 'absolute', bottom: '10px',height:'200px',width:'200px', right:'10px', borderRadius:'10px',boxShadow: "rgba(0, 0, 0, 1) 0px 5px 15px", objectFit:'cover'
        }} />
         {/* <img  src={hd} class="object" data-value='10' style={{position: 'absolute', bottom: '130px',height:'120px',width:'auto', right:'130px', borderRadius:'10px', zIndex:-1,boxShadow: "rgba(0, 0, 0, 1) 0px 5px 15px"
        }} /> */}
        
       
        <Typography variant='h1' sx={{
          fontSize: isSmallScreen ? '10px' : '84px',
          fontFamily: ['integral-Regular !important' ].join(','),
          marginBottom: '50px',
          fontWeight:1000
        }}>
         CONTACT US
        </Typography>
        <Box sx={{
          
        }}></Box>
{/* 
        <Box border={1} sx={{
          height: '400px',
          width: '700px',
          borderRadius: '10px',
          border: '2px solid',
          zIndex: '2',
          backgroundColor: 'white',
        }}>
          <Typography sx={{
            fontSize: '20px',
            fontWeight: 900,
            marginLeft: '30px',
            marginTop: '10px',
          }}>
            Personal Info
          </Typography>
          <hr style={{ width: '80%', marginTop: '10px', marginLeft: '30px', borderColor: '#FFF4F1', borderWidth: '2px' }} />

          <Box my={5} sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            gap: '10px',
          }}>
            <TextField
              required
              id="outlined-required"
              label="Name"
              defaultValue=""
              size='medium'
              color='secondary'
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
              defaultValue=""
              size='medium'
              InputProps={{
                style: {
                  borderColor: '#CCC',
                  '&:focused': { borderColor: '#ff0000' },
                  '&:active': { borderColor: '#ff0000' },
                },
              }}
            />
            <TextField
              required
              id="outlined-required"
              label="Contact"
              defaultValue=""
              size='medium'
              InputProps={{
                style: {
                  borderColor: '#CCC',
                  '&:focused': { borderColor: 'orange' },
                  '&:active': { borderColor: 'red' },
                },
              }}
            />
          </Box>

          <Typography sx={{
            fontSize: '18px',
            fontWeight: 900,
            marginLeft: '30px',
            marginTop: '50px',
          }}>
            Tell us more about your company
          </Typography>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="Others"
            multiline
            rows={5}
            inputRef={multilineRef}
            sx={{
              marginLeft: '10px',
              marginRight: '10px',
              marginTop: '10px',
              textAlign: 'center',
              width: '95%', // Adjust the width here
            }}
          />
        </Box>

        <Button sx={{
          background: '#DF9573',
          mt: isSmallScreen ? '20px' : '60px',
          borderRadius: '30px',
          '&:hover': {
            backgroundColor: '#1E1E1E',
            transition: 'background-color 0.3s ease-in-out',
          },
        }} variant="contained">
          Submit
        </Button> */}
      </Container>
    </>
  );
};
