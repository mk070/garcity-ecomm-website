import React from 'react'
import { Box, Typography } from '@mui/material'
import Marquee from "react-fast-marquee";
import pin from "../../assets/images/about/vector1.png"


export const Marquees = () => {
  return (
   <>
    <Box>
    <Marquee gradient autoFill speed={90}>
      <Typography textTransform={'capitalize'} sx={{margin:'0 25px',   textTransform:'capitalize' }} variant='h5'>Quality </Typography>
      <img width={'30px'} src={pin} alt="" />
      <Typography sx={{margin:'0 25px', }} variant='h5'>Efficiency </Typography>
      <img width={'30px'} src={pin} alt="" />
      <Typography sx={{margin:'0 25px', }} variant='h5'>hassle-free  </Typography>
      <img width={'30px'} src={pin} alt="" />
      <Typography sx={{margin:'0 25px', }} variant='h5'>integrity </Typography>
      <img width={'30px'} src={pin} alt="" />
    </Marquee>
    <Marquee gradient autoFill direction='right' speed={90}>
      <Typography sx={{margin:'0 25px', }} variant='h5'>Quality </Typography>
      <img width={'30px'} src={pin} alt="" />
      <Typography sx={{margin:'0 25px', }} variant='h5'>Efficiency </Typography>
      <img width={'30px'} src={pin} alt="" />
      <Typography sx={{margin:'0 25px', }} variant='h5'>hassle-free  </Typography>
      <img width={'30px'} src={pin} alt="" />
      <Typography sx={{margin:'0 25px', }} variant='h5'>integrity </Typography>
      <img width={'30px'} src={pin} alt="" />
    </Marquee>
    </Box>
   </>
  )
}
