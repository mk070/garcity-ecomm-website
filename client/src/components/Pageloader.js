import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const PageLoader = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF4F1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999, // Ensure loader is above other content
        flexDirection: 'column', // Stack bars and message vertically
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 2,
          '& div': {
            width: 10,
            height: 50,
            margin: '0 5px',
            backgroundColor: 'black',
            animation: 'grow 1s infinite',
          },
          '& div:nth-of-type(1)': {
            animationDelay: '0s',
          },
          '& div:nth-of-type(2)': {
            animationDelay: '0.1s',
          },
          '& div:nth-of-type(3)': {
            animationDelay: '0.2s',
          },
          '& div:nth-of-type(4)': {
            animationDelay: '0.3s',
          },
          '& div:nth-of-type(5)': {
            animationDelay: '0.4s',
          },
          '@keyframes grow': {
            '0%, 100%': { transform: 'scaleY(0.3)' },
            '50%': { transform: 'scaleY(1)' },
          },
        }}
      >
        <Box component="div" />
        <Box component="div" />
        <Box component="div" />
        <Box component="div" />
        <Box component="div" />
      </Box>
      <Typography
        sx={{
          color: 'black',
          fontSize: '1.5rem',
          fontWeight: 'bold',
        }}
      >
        Loading...
      </Typography>
    </Box>
  );
};

export default PageLoader;
