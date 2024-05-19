import React from 'react';
import Box from '@mui/material/Box';

const PageLoader = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999, // Ensure loader is above other content
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: 80,
          height: 80,
          '& .hanger': {
            position: 'absolute',
            width: '100%',
            height: '100%',
            border: '4px solid',
            borderColor: 'primary.main transparent transparent transparent',
            borderRadius: '50%',
            animation: 'rotate 1.2s linear infinite',
            transformOrigin: '50% 50%',
          },
          '& .hanger:nth-of-type(1)': {
            animationDelay: '-0.45s',
          },
          '& .hanger:nth-of-type(2)': {
            animationDelay: '-0.3s',
          },
          '& .hanger:nth-of-type(3)': {
            animationDelay: '-0.15s',
          },
          '@keyframes rotate': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
        }}
      >
        <Box className="hanger" />
        <Box className="hanger" />
        <Box className="hanger" />
      </Box>
    </Box>
  );
};

export default PageLoader;
