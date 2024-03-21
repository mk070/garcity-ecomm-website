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
                Clothing of superior quality is constructed mostly of natural fibers such as cotton, linen, wool, or silk. High-quality apparel is long-lasting, comfy, and meticulously constructed like robust zippers, wooden buttons, additional accessories, but also lining, facing, and excellent stitchwork
              </Typography>
    </Box>
    </>
  )
}
