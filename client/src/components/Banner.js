import React from 'react'
import banner from "../assets/images/banner.svg";
import pin1 from "../assets/images/pin1.png";
import red from "../assets/images/pin2.png";
import blue from "../assets/images/pin3.png";
import darkblue from "../assets/images/pin4.png";
import scissors from "../assets/images/scissors.png";
import { Box, useMediaQuery } from '@mui/material';

export const Banner = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Box
        sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
        }}
    >
        <img
        src={banner}
        style={{ marginTop: '0', width: isSmallScreen ? '90%' : '110%' }} // Adjust image width for small screens
        alt=""
        />
        {/* Pin and scissor images */}
        <img
        src={pin1}
        style={{
            marginTop: '0',
            width: isSmallScreen ? '30px' : '100px',
            left: isSmallScreen ? '50%' : '-170px',
            top: isSmallScreen ? '198px' : '80px',
            position: 'absolute',
            animation: 'floatAnimation 1.5s infinite alternate',
        }}
        alt=""
        />
        <img
        src={red}
        style={{
            marginTop: '0',
            width: isSmallScreen ? '90px' : '170px',
            right: isSmallScreen ? '0px' : '10px',
            top: isSmallScreen ? '370px' : '541px',
            position: 'absolute',
            animation: 'floatAnimation 1.5s infinite alternate',

        }}
        alt=""
        />
        <img
        src={blue}
        style={{
            marginTop: '0',
            width: isSmallScreen ? '40px' : '70px',
            right: isSmallScreen ? '30%' : '170px',
            top: isSmallScreen ? '20px' : '0',
            position: 'absolute',
            animation: 'floatAnimation 1.5s infinite alternate',

        }}
        alt=""
        />
        <img
        src={darkblue}
        style={{
            marginTop: '0',
            width: isSmallScreen ? '70px' : '110px',
            left: isSmallScreen ? '10%' : '30px',
            bottom: isSmallScreen ? '20px' : '0',
            position: 'absolute',
            animation: 'floatAnimation 1.5s infinite alternate',

        }}
        alt=""
        />
        <img
        src={scissors}
        style={{
            marginTop: '0',
            width: isSmallScreen ? '40px' : '100px',
            right: isSmallScreen ? '60px' : '1339px',
            bottom: isSmallScreen ? '116px' : '44px',
            position: 'absolute',
            animation: 'floatAnimation 1.5s infinite alternate',
        }}
        alt=""
        />
    </Box>
  )
}
