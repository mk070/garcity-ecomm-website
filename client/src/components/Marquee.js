import React, { useRef, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Marquee = ({ logos }) => {
  const marqueeRef = useRef(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const marquee = marqueeRef.current;

    if (marquee) {
      const cloneLogos = [...logos, ...logos]; // Duplicate logos array to create a continuous loop

      let animationFrameId;

      const animateMarquee = () => {
        const marqueeWidth = marquee.offsetWidth;
        const contentWidth = marquee.scrollWidth;

        let animationDuration = 40; // Default animation speed for desktop

        if (isSmallScreen) {
          animationDuration = 5; // Adjusted animation speed for mobile devices
        }

        animationDuration *= contentWidth / marqueeWidth;

        marquee.style.animation = `marquee ${animationDuration}s linear infinite`;
      };

      animateMarquee();

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [logos, isSmallScreen]);

  return (
    <div className="marquee-container">
      <div ref={marqueeRef} className="marquee">
        {logos.map((logo, index) => (
          <img key={index} className="logo" src={logo} alt={`Logo ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
