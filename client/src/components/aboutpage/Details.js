import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { gsap, TimelineMax } from "gsap";
import mission from "../../assets/images/about/mision.avif"
import vision from "../../assets/images/about/vision.avif"
import value from "../../assets/images/about/value.avif"
export const Details = () => {

  return (
      <Box sx={{ display: 'flex', mt: { sm: '0px' }, flexDirection: { xs: 'column', sm: 'row' }, padding: { xs: '50px 30px', sm: '0 100px' }, gap:'30px'}}>

        <Box className="speciality-box" sx={{ borderRadius:{sm:"30px"} ,mr: { sm: '20px' }, backgroundColor:"#FFF4F1",color:'#372B29 !important',boxShadow:"5px 5px 2px #c3c3c3,-5px -5px 2px #fdfdfd",padding: {xs:'40px', sm: '60px 60px' },  }}>
          {/* <Typography variant='h3' sx={{fontFamily: "integral-Regular  !important" }} >01.</Typography> */}
          <Box sx={{width:{sm:'100%'}, height:{sm:"95px"}}}>
                <img src={mission} alt="" style={{width:"90px", height:"100%",marginBottom:'0'}} srcset="" /> 
          </Box>         
          <Typography variant='h5' sx={{ fontFamily: "integral-Regular  !important" ,mb: { sm: '' ,xs:'15px'} }}>Mission:</Typography>
          <Typography variant='body1' sx={{ marginTop: { sm: '30px' } }}>
                Revolutionize garment manufacturing with innovative, sustainable solutions, exceeding
                client expectations for growth and success.
          </Typography>
        </Box>

        <Box className="speciality-box" sx={{ borderRadius:{sm:"30px"} ,mr: { sm: '20px' }, backgroundColor:"#FFF4F1",color:'#372B29 !important',boxShadow:"5px 5px 2px #c3c3c3,-5px -5px 2px #fdfdfd", padding: {xs:'40px',sm: '60px 60px' } }}>
          {/* <Typography variant='h3' sx={{fontFamily: "integral-Regular  !important" }} >02.</Typography> */}

          <Box sx={{width:{sm:'100%'}, height:{sm:"95px !important"}}}>
                <img src={vision} alt="" style={{ width:"95px",height:"100%",marginBottom:'0'}} srcset="" /> 
          </Box>
          

          <Typography variant='h5'  sx={{ fontFamily: "integral-Regular  !important" ,mb: { sm: '' ,xs:'15px'} }}>Vision:</Typography>
          <Typography sx={{ marginTop: { sm: '30px' } }}>
                Become the go-to for premium garment manufacturing, renowned for excellence,
                innovation, and sustainability, driving positive industry change.
          </Typography>
        </Box>

        <Box className="speciality-box" sx={{borderRadius:{sm:"30px"} , mr: { sm: '20px' }, backgroundColor:"#FFF4F1",color:'#372B29 !important',boxShadow:"5px 5px 2px #c3c3c3,-5px -5px 2px #fdfdfd", padding: { xs:'40px', sm: '60px 60px' } }}>
          {/* <Typography variant='h3' sx={{fontFamily: "integral-Regular  !important" }} >03.</Typography> */}

          <Box sx={{width:{sm:'100%'}, height:{sm:"95px"}}}>
                <img src={value} alt="" style={{width:"80px",height:"80px", marginBottom:'0'}} srcset="" /> 
          </Box>

          <Typography variant='h5'  sx={{ fontFamily: "integral-Regular  !important" ,m: { sm: '' ,xs:'15px 0'} }}>Values:</Typography>
          <Typography sx={{ marginTop: { sm: '30px' } }}>
           Our values are rooted in excellence, innovation, integrity, and sustainability, guiding us to deliver superior solutions while fostering trust and environmental responsibility.
          </Typography>
        </Box>
      </Box>

  )
}
