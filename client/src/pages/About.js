import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Hero } from '../components/aboutpage/Hero';
import { Marquees } from '../components/aboutpage/Marquee';
import Printing from '../components/aboutpage/Printing';
import { Typography, useMediaQuery } from '@mui/material';
import Shipping from '../components/aboutpage/Shipping';
import Fabric from '../components/aboutpage/Fabric';
import Packaging from '../components/aboutpage/Packaging';
import { Details } from '../components/aboutpage/Details';
import Design from '../components/aboutpage/Desgin';

gsap.registerPlugin(ScrollTrigger);

 const About = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  

  useEffect(()=>{
    window.scrollTo(0, 0);

  },[])

  return (
    <>
      <Hero />
      <Details />
      <Marquees />
      <Typography
        align='center'
        marginTop={10}
        variant='h3'
        position={'sticky'}
        zIndex={-1}
        sx={{
          fontSize: isSmallScreen ? '24px' : '50px',
          fontFamily: 'integral-Regular !important',
          marginBottom: '0px',
          top:{sm:"90px", xs:'75px'},
        }}
      >
        Services we <span style={{ fontFamily: ['integral-Regular'].join(','), color: '#DF9573' }}>offer</span><br /><br />
      </Typography>
      <div className="wrapper">
        <div className="horizontal-wrapper">
          <div className="section sticky"><Fabric /></div>
          <div className="section sticky"><Design /></div>
          <div className="section sticky"><Printing /></div>
          <div className="section sticky"><Packaging /></div>
          <div className="section sticky" style={{zIndex:"1"}}><Shipping /></div> 
        </div>
      </div>
    </>
  );
};

export default About ; 