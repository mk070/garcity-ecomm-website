import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

export const CatchLine = () => {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <>
    
  <Box mx={10} marginTop={5} >
    <Typography
                height={100}
                sx={{
                  width: isSmallScreen ? '300px' : '100%',
                  justifyContent:"center",
                  textAlign:"center"
                }}
              >
               Feel free to reach out to us for any inquiries or assistance at
garcitystyle@gmail.com, where our dedicated team is ready to help
you with your queries and provide personalized support.

              </Typography>
    </Box>
    </>
  )
}
