import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import gsap from 'gsap';
import img from '../../assets/images/Home/why.avif';

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
        marginBottom: { sm: '10px', xs: '10px' },
        display: 'flex',
        flexDirection: { sm: 'row', xs: 'column' },
        padding: { sm: '60px 180px', xs: '40px 20px' },
        bgcolor: 'rgb(25 118 210 / 11%)', // Glass effect background
        backdropFilter: 'blur(10px)', // Frosted glass effect
        borderRadius: '20px',
        // boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', // Subtle shadow for depth
        border: '1px solid rgba(255, 255, 255, 0.18)',
        color: '#ffffff',
      }}
    >
      <Box
        sx={{
          width: { sm: '90%' },
          mt: { sm: '80px' },
          p: { sm: '0', xs: '20px' },
          position: 'relative',
          borderRadius: { sm: '30px', xs: '20px' },
        }}
      >
        <img
          width={'100%'}
          src={img}
          style={{ boxShadow: 'black 1px 1px 8px 0px', height: '90%', borderRadius: '20px' }}
          loading="lazy"
          alt=""
          srcSet=""
        />
      </Box>

      <Box
        ref={featureRef}
        sx={{
          ml: { sm: '60px', xs: '0' },
          display: 'flex',
          pt: '30px',
          flexDirection: 'column',
          padding: '20px',
          position: 'relative',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            fontSize: { xs: '24px', sm: '45px' },
            fontFamily: 'var(--primary-font) !important',
            marginBottom: { xs: '30px', sm: '0px' },
            color: '#091D3D', // Primary text color
            fontWeight:'550'
          }}
        >
          Why <span
          style={{
            color: 'var(--trinary-color)',
            fontWeight: 550,
            fontFamily: 'inherit',
          }}
          className="text-animation"
        >
          Garcity ?
        </span>
        </Typography>
        <Box sx={{ mt: { sm: '30px' }, color: 'black' }}>
          <Typography className="point" sx={{ fontSize: { sm: '18px' }, lineHeight: { sm: '30px' }, mb: '10px' }}>
            <span style={{ fontWeight: 'bolder', color: '#D6A85D' }}>1. Quality and Innovation:</span> Garcity offers
            high-quality, innovative products/services that meet customers' needs and stand out in the market.
          </Typography>

          <Typography className="point" sx={{ fontSize: { sm: '18px' }, lineHeight: { sm: '30px' }, mb: '10px' }}>
            <span style={{ fontWeight: 'bolder', color: '#D6A85D' }}>2. Customer Satisfaction:</span> With a strong
            focus on customer satisfaction, Garcity provides excellent support and resolves issues promptly.
          </Typography>

          <Typography className="point" sx={{ fontSize: { sm: '18px' }, lineHeight: { sm: '30px' }, mb: '10px' }}>
            <span style={{ fontWeight: 'bolder', color: '#D6A85D' }}>3. Affordability and Value:</span> Garcity offers
            competitive pricing and delivers value for money compared to alternatives.
          </Typography>

          <Typography className="point" sx={{ fontSize: { sm: '18px' }, lineHeight: { sm: '30px' }, mb: '10px' }}>
            <span style={{ fontWeight: 'bolder', color: '#D6A85D' }}>4. Reputation and Trust:</span> Garcity has built
            a reputation for integrity, reliability, and ethical business practices, instilling trust in potential
            customers.
          </Typography>

          <Typography className="point" sx={{ fontSize: { sm: '18px' }, lineHeight: { sm: '30px' }, mb: '10px' }}>
            <span style={{ fontWeight: 'bolder', color: '#D6A85D' }}>5. Convenience and Sustainability:</span> Garcity
            provides convenient purchasing options and prioritizes environmental sustainability, appealing to socially
            conscious consumers.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
