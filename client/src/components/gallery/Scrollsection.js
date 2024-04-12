

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Box, useMediaQuery } from "@mui/material";
 

import img1 from '../../assets/images/popularcollection/image1.png';
import img2 from '../../assets/images/popularcollection/image2.png';
import img3 from '../../assets/images/popularcollection/image3.png';
import img4 from '../../assets/images/popularcollection/image4.png';
gsap.registerPlugin(ScrollTrigger);

function Scrollsection() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  useEffect(() => {
    gsap.to('.img', {
      scrollTrigger: {
        trigger: '.img',
        scrub: true
      },
      y: -70,
      stagger: 0.2
    });
  }, []);

  return (
    <Box  sx={{display:'flex', padding :{sm:'40px',xs:'25px'}, justifyContent:'center'  ,flexDirection:{sm:"row", xs:'column'},
    
    }}>
      <Box sx={{mr:{sm:'30px'}}}>
        <Box className="img" sx={{width:{sm:'350px'},
      marginBottom:isSmallScreen?'50px':''
      }}><img src={img2} width={'100%'} alt="" srcset="" /></Box>
        <Box className="img" sx={{width:{sm:'350px'}, marginBottom:isSmallScreen?'50px':'' }}> <img src={img1}width={'100%'}  alt="" srcset="" /></Box>
        <Box className="img" sx={{width:{sm:'350px'},  marginBottom:isSmallScreen?'50px':''}}><img src={img3} width={'100%'} alt="" srcset="" /></Box>
      </Box>
      <Box sx={{mr:{sm:'30px'}}}>
        <Box className="img" sx={{width:{sm:'350px'}, marginBottom:isSmallScreen?'50px':''}}><img  width={'100%'}src={img3} alt="" srcset="" /></Box>
        <Box className="img" sx={{width:{sm:'350px'}, marginBottom:isSmallScreen?'50px':''}}> <img width={'100%'} src={img2} alt="" srcset="" /></Box>
        <Box className="img" sx={{width:{sm:'350px'}, marginBottom:isSmallScreen?'50px':''}}><img  width={'100%'}src={img1} alt="" srcset="" /></Box>
      </Box>
      <Box>
        <Box className="img" sx={{width:{sm:'350px'}, marginBottom:isSmallScreen?'50px':''}}> <img width={'100%'} src={img3} alt="" srcset="" /></Box>
        <Box className="img" sx={{width:{sm:'350px'}, marginBottom:isSmallScreen?'50px':''}}><img  width={'100%'}src={img2} alt="" srcset="" /></Box>
        <Box className="img" sx={{width:{sm:'350px'}, marginBottom:isSmallScreen?'50px':''}}><img  width={'100%'}src={img1} alt="" srcset="" /></Box>
      </Box>

      {/* You can add more sections with images as needed */}
    </Box>
  );
}

export default Scrollsection;



