import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'
import Marquee from "react-fast-marquee";
import pin from "../../assets/images/about/vector1.png"

import quality from "../../assets/images/about/points/quality.png"
import efficiency from "../../assets/images/about/points/energy.png"
import speed from "../../assets/images/about/points/speed.png"
import Hassle from "../../assets/images/about/points/Hassle-free.png"
import Sourcing from "../../assets/images/about/points/Sourcing.png"
import Integrity from "../../assets/images/about/points/Integrity.png"


export const Marquees = () => {

  return (
   <>
    <Box sx={{marginTop:{sm:'50px'}}}>
    <Marquee gradient autoFill speed={90}>
      <Typography textTransform={'capitalize'} sx={{margin:'0 25px',   textTransform:'capitalize' }} variant='h5'>Quality </Typography>
      <img width={'30px'} src={quality} alt="" />
      <Typography sx={{margin:'0 25px', }} variant='h5'>Efficiency </Typography>
      <img width={'30px'} src={efficiency} alt="" />
      <Typography sx={{margin:'0 25px', }} variant='h5'>Speed </Typography>
      <img width={'30px'} src={speed} alt="" />
      <Typography sx={{margin:'0 25px', }} variant='h5'>Sourcing </Typography>
      <img width={'30px'} src={Sourcing} alt="" />
      <Typography sx={{margin:'0 25px', }} variant='h5'>Hassle-free  </Typography>
      <img width={'30px'} src={Hassle} alt="" />
      <Typography sx={{margin:'0 25px', }} variant='h5'>Integrity </Typography>
      <img width={'30px'} src={Integrity} alt="" />
    </Marquee>
    {/* <Marquee gradient autoFill direction='right' speed={90}>
      <Typography sx={{margin:'0 25px', }} variant='h5'>Quality </Typography>
      <img width={'30px'} src={pin} alt="" />
      <Typography sx={{margin:'0 25px', }} variant='h5'>Efficiency </Typography>
      <img width={'30px'} src={pin} alt="" />
      <Typography sx={{margin:'0 25px', }} variant='h5'>hassle-free  </Typography>
      <img width={'30px'} src={pin} alt="" />
      <Typography sx={{margin:'0 25px', }} variant='h5'>integrity </Typography>
      <img width={'30px'} src={pin} alt="" />
    </Marquee> */}
    </Box>
   </>
  )
}
