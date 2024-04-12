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

export const About = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  // const wrapperRef = useRef(null);
  // const totalHeightRef = useRef(0);

  // useEffect(() => {
  //   const wrapper = wrapperRef.current;
  //   const sections = wrapper.querySelectorAll('.section');

  //   sections.forEach(section => {
  //     totalHeightRef.current += section.offsetHeight;
  //   });

  //   wrapper.style.height = `${totalHeightRef.current}px`;

  //   const updateHeight = () => {
  //     totalHeightRef.current = 0;
  //     sections.forEach(section => {
  //       totalHeightRef.current += section.offsetHeight;
  //     });
  //     wrapper.style.height = `${totalHeightRef.current}px`;
  //   };

  //   window.addEventListener('resize', updateHeight);

  //   return () => {
  //     window.removeEventListener('resize', updateHeight);
  //   };
  // }, []);

  // useEffect(() => {
  //   const wrapper = wrapperRef.current;
  //   const sections = wrapper.querySelectorAll('.section');

  //   sections.forEach((section, index) => {
  //     const startTrigger = index === 0 ? "top top" : () => `+=${(sections[index - 1].offsetHeight - 100)}`;
  //     const endTrigger = index === sections.length - 1 ? "+=100%" : () => `+=${(sections[index + 1].offsetHeight - 100)}`;

  //     gsap.to(section, {
  //       scrollTrigger: {
  //         trigger: section,
  //         start: startTrigger,
  //         end: endTrigger,
  //         pin: true,
  //         pinSpacing: false,
  //       },
  //     });
  //   });
  // }, []);

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
        top={90}
        sx={{
          fontSize: isSmallScreen ? '30px' : '50px',
          fontFamily: 'integral-Regular !important',
          marginBottom: '1px',
        }}
      >
        Services we <span style={{ fontFamily: ['integral-Regular'].join(','), color: '#DF9573' }}>offer</span><br /><br />
      </Typography>
      <div className="wrapper">
        <div className="horizontal-wrapper">
          <div className="section sticky"><Fabric /></div>
          {/*<div className="section sticky"><Design /></div>
          <div className="section sticky"><Printing /></div>
          <div className="section sticky"><Packaging /></div>
          <div className="section sticky"><Shipping /></div>  */}
        </div>
      </div>
    </>
  );
};
