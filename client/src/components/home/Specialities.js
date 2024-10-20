import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { gsap, TimelineMax } from "gsap";
import { Brush } from 'react-brush-text'; // Import Brush from react-brush-text

export const Specialities = () => {
  const specialitiesRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    observer.observe(specialitiesRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      handleAnimation();
    }
  }, [isVisible]);

  const handleAnimation = () => {
    const tl = new TimelineMax();
    
    gsap.set(".speciality-box", { opacity: 0, y: 100 });

    tl.staggerTo(".speciality-box", 1.5, { opacity: 1, y: 0, ease: "power3.out" }, 0.5);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 } // 50% visibility triggers the animation
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, []);




  return (
    <Box ref={specialitiesRef} sx={{ display: {sm:'block', xl:"flex"}, flexDirection: { sm: 'column' } }}>
<Box
      ref={boxRef}
      sx={{
        width: { sm: '100%' },
        padding: { sm: '60px' },
        mt: { xs: '40px', sm: '0px' },
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      {isVisible && (
        <Brush
          type={1} // Set the type of the brush
          className="brush-animate" // Apply the animation class
        >
          <Typography
            sx={{
              fontSize: { xs: '24px', sm: '40px' },
              fontFamily: 'var(--primary-font) !important',
              fontWeight: 600,
              color: 'black', // Text color remains black
              zIndex: 2,
            }}
          >
            Our Specialities
          </Typography>
        </Brush>
      )}
    </Box>

      <Box sx={{ display: 'flex', mt: { sm: '0px' }, flexDirection: { xs: 'column', sm: 'row' }, padding: { xs: '35px', sm: '0 100px' }, background: 'linear-gradient(to top, rgb(131 186 241 / 49%), #fff)',   
    }}>

        <Box className="speciality-box" sx={{ mr: { sm: '20px' },marginBo:'20px', 
        padding: {xs:'30px', sm: '50px 60px 0px 60px'} , height:{xs:'350px', sm:'400px'}, marginBottom:'30px',borderRadius:'20px',}}>
          {/* <Typography variant='h3'>01.</Typography> */}
          <Typography variant='h4' sx={{ margin: {sm:'30px 0',xs:'20px 0'}, fontFamily: 'var(--primary-font) !important' }}>Customization Excellence:</Typography>
          <Typography variant='body1' sx={{ marginTop: { sm: '30px' } }}>We offer top-notch
            customization options,
            empowering you to
            personalize garments to
            perfection with color, design,
            and style choices.
          </Typography>
        </Box>

        <Box className="speciality-box" sx={{ mr: { sm: '20px' },marginBo:'20px', 
        padding: {xs:'30px', sm: '50px 60px'} , height:{xs:'350px', sm:'400px'}, marginBottom:'30px',borderRadius:'20px' }}>
          {/* <Typography variant='h3'>02.</Typography> */}
          <Typography variant='h4' sx={{ margin: {sm:'30px 0',xs:'20px 0'}, fontFamily: 'var(--primary-font) !important'  }}>Printing Services:</Typography>
          <Typography sx={{ marginTop: { sm: '30px' } }}>Experience professional
            printing for your custom
            designs, logos, or messages,
            delivering high-quality results
            that align with your vision
          </Typography>
        </Box>

        <Box className="speciality-box" sx={{ mr: { sm: '20px' },marginBo:'20px', 
        padding: {xs:'30px', sm: '50px 60px'} , height:{xs:'350px', sm:'400px'}, marginBottom:'30px',borderRadius:'20px' }}>
          {/* <Typography variant='h3'>03.</Typography> */}
          <Typography variant='h4' sx={{ margin: {sm:'30px 0',xs:'20px 0'}, fontFamily: 'var(--primary-font) !important'   }}>Fabrication Excellence:</Typography>
          <Typography sx={{ marginTop: { sm: '30px' } }}>We excel in fabrication,
            crafting top-notch fabrics
            like organic cotton, Supima,
            100% cotton, polyester, and
            cotton-poly blends. Your
            satisfaction is our priority.
          </Typography>
        </Box>
      </Box>
    </Box>

  )
}
