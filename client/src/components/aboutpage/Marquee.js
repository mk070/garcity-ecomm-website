import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'
import Marquee from "react-fast-marquee";

import quality from "../../assets/images/about/points/quality.avif"
import efficiency from "../../assets/images/about/points/energy.avif"
import speed from "../../assets/images/about/points/speed.avif"
import Hassle from "../../assets/images/about/points/Hassle-free.avif"
import Sourcing from "../../assets/images/about/points/Sourcing.avif"
import Integrity from "../../assets/images/about/points/Integrity.avif"


export const Marquees = () => {

  return (
   <>
    <Box sx={{marginTop:{sm:'50px',xs:"0px"}}}>
    <Marquee gradient autoFill speed={90} >
      <Typography sx={{margin:'0 25px',  fontSize:{sm:'18px',xs:'14px'}, textTransform:'capitalize' }} variant='h5'>Quality </Typography>
      <img width={'30px'} src={quality} alt="" />
      <Typography  sx={{margin:'0 25px',  fontSize:{sm:'18px',xs:'14px'}, textTransform:'capitalize' }}variant='h5'>Efficiency </Typography>
      <img width={'30px'} src={efficiency} alt="" />
      <Typography  sx={{margin:'0 25px',  fontSize:{sm:'18px',xs:'14px'}, textTransform:'capitalize' }} variant='h5'>Speed </Typography>
      <img width={'30px'} src={speed} alt="" />
      <Typography  sx={{margin:'0 25px',  fontSize:{sm:'18px',xs:'14px'}, textTransform:'capitalize' }} variant='h5'>Sourcing </Typography>
      <img width={'30px'} src={Sourcing} alt="" />
      <Typography  sx={{margin:'0 25px',  fontSize:{sm:'18px',xs:'14px'}, textTransform:'capitalize' }} variant='h5'>Hassle-free  </Typography>
      <img width={'30px'} src={Hassle} alt="" />
      <Typography  sx={{margin:'0 25px',  fontSize:{sm:'18px',xs:'14px'}, textTransform:'capitalize' }} variant='h5'>Integrity </Typography>
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
