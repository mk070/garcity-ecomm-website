import React from 'react'
import { Box, Typography, useMediaQuery, Fab } from '@mui/material';
import{ useState, useEffect } from 'react';
import { ArrowUpward } from '@mui/icons-material';
export const MoveupButton = () => {
    
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 300) { // Adjust the scroll position as needed
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
    {showButton && (
        <Fab
          color=""
          aria-label="scroll-to-top"
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: 80,
            right: 20,
            zIndex: 1000,
            backgroundColor: 'white',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        >
          <ArrowUpward />
        </Fab>
      )}
    </>
  )
}
