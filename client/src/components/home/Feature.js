import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import bgimg from '../../assets/images/bgimg.png';
import img from '../../assets/images/feature1.png';
import gsap from 'gsap';

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
        { x: '0%', opacity: 1, stagger: 0.5, ease: 'power3.out' }
      );
    }
  }, [isVisible]);

  return (
    <Box
      
      sx={{
        marginTop: '40px',
        marginBottom: { sm: '10px' , xs:'150px'},
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: { sm: '60px 180px', xs: '40px 20px' },
        flexDirection: 'column',
        bgcolor: '#FFF4F1',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: 'row',
          ml: '0px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      ></Box>

      <Box
        sx={{
          display: 'flex',
          mt: { sm: '30px', xs: '40px' },
          flexDirection: { sm: 'row', xs: 'column' },
        }}
      >
        <Box sx={{ width: { sm: '30%', xs: '60%' }, mt: '', position: 'relative', marginLeft:{xs:'75px', lg:'0'} }}>
          <img width={'100%'} src={bgimg} alt="" srcSet="" />
          <img width={'102%'} src={img} style={{ position: 'absolute', top: '1px', right: '2px', transform: 'rotate(1deg)' }} alt="" srcSet="" />
        </Box>

        <Box ref={featureRef} sx={{ width: { sm: '60%' }, display: 'flex', pt: '30px', flexDirection: 'column', ml:{lg:'120px'},  padding:'20px', position:'relative' }}>

          <Typography variant="h4" sx={{ fontSize: { xs:'24px',sm: '32px' } , fontFamily: "integral-Regular  !important", marginBottom:{xs:'30px'}  }} color>
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
    </Box>
  );
};
