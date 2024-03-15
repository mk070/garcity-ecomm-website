import { Box, Typography, useMediaQuery,Button  } from '@mui/material';
import React from 'react';
import '../App.css'
import { Banner } from './Banner';

export const Herosection = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isSmallScreen ? 'column-reverse': 'row',
        marginTop: '64px',
        alignItems: 'center',
        padding: isSmallScreen ? '0': '0 130px',
        height: isSmallScreen ? '90vh':'95vh', // Adjust height to auto for responsiveness
        position: 'relative'  
      }}
    >

        
        <Box
            sx={{
            flex: 1,
            padding: '0 20px',
            width: '100%', // Full width on small screens
            marginBottom: isSmallScreen ? '20px' : '0', // Add margin bottom on small screens
            }}
        >
            <Typography
                variant='h3'
                sx={{
                    fontSize:isSmallScreen ? '30px':'60px',
                    fontFamily: ['integral-Regular', 'sans-serif'].join(','),
                    marginBottom: '20px',
                }}
            >
                FIND <span style={{ color: '#DF9573' }}>CLOTHES</span><br />THAT MATCHES<br />YOUR STYLE
            </Typography>
              
            <Typography mt={'10px'} variant='body1' sx={{fontSize:isSmallScreen ? '10px' : '17px',}}>
                Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </Typography>

            <Button sx={{
              background:'#DF9573',
              mt: isSmallScreen ? '20px' : '60px',
              borderRadius:'30px',
              '&:hover': {
                backgroundColor: '#1E1E1E', 
                color:'',// Add hover effect
                transition: 'background-color 0.3s ease-in-out',
              },
            }} variant="contained">Know More</Button>

        </Box>

        <Banner />

      
    </Box>
    



  )
}
