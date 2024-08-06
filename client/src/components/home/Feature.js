import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import gsap from 'gsap';
import gif from '../../assets/gifs/home.webm'
import img from "../../assets/images/Home/why.avif"

export const Feature = () => {
  const featureRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    observer.observe(featureRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const tl = gsap.timeline({ defaults: { duration: 1 } });
      tl.fromTo(
        featureRef.current.querySelectorAll('.point'),
        { x: '100%', opacity: 0 },
        { x: '0%', opacity: 1, stagger: 0.4, ease: 'power3.out' }
      );
    }
  }, [isVisible]);

  return (
    <Box
      
      sx={{
        marginTop: '40px',
        marginBottom: { sm: '10px' , xs:'10px'},
        
        display: 'flex',
        padding: { sm: '60px 180px', xs: '40px 20px' },
        flexDirection: {sm:'row',xs:'column'},
        bgcolor: '#FFF4F1',
      }}
    >

        <Box sx={{width:{sm:'90%'}, mt: {sm:'50px'}, p:{sm:'0',xs:'20px'},position: 'relative', borderRadius:{sm:'30px',xs:'20px'}}}>
          <img width={'100%'} src={img} style={{ boxShadow:"black 1px 1px 8px 0px",height:'100%',borderRadius:'20px'}} loading='lazy'  alt="" srcSet="" />

          {/* <video  autoPlay loop preload="auto" width={'100%'} src={`${gif}?v=${Date.now()}`}  loading='lazy' style={{ boxShadow:"black 1px 1px 8px 0px",borderRadius:'20px'}} alt="" srcSet="" /> */}
          {/* <video autoPlay muted loop width={'100%'} style={{ boxShadow:"black 1px 1px 8px 0px",borderRadius:'20px'}}>
            <source src = {gif} type = "video/webm"/>
          </video> */}

          {/* <AnimatedGif src ={gif} alt ="gif video" /> */}
        </Box>

        <Box ref={featureRef} sx={{ ml:{sm:'30px',xs:'0'}, display: 'flex', pt: '30px', flexDirection: 'column',  padding:'20px', position:'relative' }}>

          <Typography variant="h4" sx={{ textAlign: 'center',fontSize: { xs:'24px',sm: '32px' } , fontFamily: "integral-Regular  !important", marginBottom:{xs:'30px',sm:'30px'}  }} color>
            Why Garcity ?
          </Typography>
          <Box sx={{ mt: { sm: '30px' } }}>
            <Typography className="point" sx={{ fontSize: { sm: '18px' }, lineHeight: { sm: '30px' }, mb:'10px'  }}>
              <span style={{ fontWeight: 'bolder' }}>1. Quality and Innovation:</span> Garcity offers high-quality, innovative products/services
              that meet customers' needs and stand out in the market. <br />{' '}
            </Typography>

            <Typography className="point" sx={{ fontSize: { sm: '18px' }, lineHeight: { sm: '30px' }, mb:'10px' }}>
              <span style={{ fontWeight: 'bolder' }}>2. Customer Satisfaction:</span>With a strong focus on customer satisfaction, Garcity provides
              excellent support and resolves issues promptly.{' '}
            </Typography>

            <Typography className="point" sx={{ fontSize: { sm: '18px' }, lineHeight: { sm: '30px' }, mb: '10px' }}>
              <span style={{ fontWeight: 'bolder' }}>3. Affordability and Value: </span>Garcity offers competitive pricing and delivers value for money
              compared to alternatives.{' '}
            </Typography>

            <Typography className="point" sx={{ fontSize: { sm: '18px' }, lineHeight: { sm: '30px' }, mb:'10px' }}>
              <span style={{ fontWeight: 'bolder' }}>4. Reputation and Trust:</span> Garcity has built a reputation for integrity, reliability, and
              ethical business practices, instilling trust in potential customers.{' '}
            </Typography>

            <Typography className="point" sx={{ fontSize: { sm: '18px' }, lineHeight: { sm: '30px' }, mb:'10px' }}>
              <span style={{ fontWeight: 'bolder' }}>5. Convenience and Sustainability:</span> Garcity provides convenient purchasing options and
              prioritizes environmental sustainability, appealing to socially conscious consumers.{' '}
            </Typography>
          </Box>
        </Box>

    </Box>
  );
};
