import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { gsap, TimelineMax } from "gsap";
import mission from "../../assets/images/about/mision.png"
export const Details = () => {
//   const specialitiesRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       });
//     });

//     observer.observe(specialitiesRef.current);

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     if (isVisible) {
//       handleAnimation();
//     }
//   }, [isVisible]);

//   const handleAnimation = () => {
//     const tl = new TimelineMax();
    
//     gsap.set(".speciality-box", { opacity: 0, y: 100 });

//     tl.staggerTo(".speciality-box", 1.5, { opacity: 1, y: 0, ease: "power3.out" }, 0.5);
//   };

  return (
    <Box  sx={{ display: "flex", flexDirection: { sm: 'column' } }}>


      <Box sx={{ display: 'flex', mt: { sm: '0px' }, flexDirection: { xs: 'column', sm: 'row' }, padding: { xs: '90px 0', sm: '0 100px' }, background: 'linear-gradient(to top, #FFF4F1, #fff)' }}>

        <Box className="speciality-box" sx={{ borderRadius:{sm:"30px"} ,mr: { sm: '20px' }, backgroundColor:"#FFF4F1",color:'#372B29 !important',boxShadow:"5px 5px 2px #c3c3c3,-5px -5px 2px #fdfdfd",padding: { sm: '60px 60px' } }}>
          {/* <Typography variant='h3' sx={{fontFamily: "integral-Regular  !important" }} >01.</Typography> */}
          <img src={mission} alt="" style={{width:"90px", marginBottom:'0'}} srcset="" />
          <Typography variant='h5' sx={{ fontFamily: "integral-Regular  !important" ,marginTop: { sm: '' } }}>Mission:</Typography>
          <Typography variant='body1' sx={{ marginTop: { sm: '30px' } }}>
                Revolutionize garment manufacturing with innovative, sustainable solutions, exceeding
                client expectations for growth and success.
          </Typography>
        </Box>

        <Box className="speciality-box" sx={{ borderRadius:{sm:"30px"} ,mr: { sm: '20px' }, backgroundColor:"#FFF4F1",color:'#372B29 !important',boxShadow:"5px 5px 2px #c3c3c3,-5px -5px 2px #fdfdfd", padding: { sm: '60px 60px' } }}>
          <Typography variant='h3' sx={{fontFamily: "integral-Regular  !important" }} >02.</Typography>
          <Typography variant='h5' sx={{ marginTop: { sm: '30px' } }}>Vision:</Typography>
          <Typography sx={{ marginTop: { sm: '30px' } }}>
                Become the go-to for premium garment manufacturing, renowned for excellence,
                innovation, and sustainability, driving positive industry change.
          </Typography>
        </Box>

        <Box className="speciality-box" sx={{borderRadius:{sm:"30px"} , mr: { sm: '20px' }, backgroundColor:"#FFF4F1",color:'#372B29 !important',boxShadow:"5px 5px 2px #c3c3c3,-5px -5px 2px #fdfdfd", padding: { sm: '60px 60px' } }}>
          <Typography variant='h3' sx={{fontFamily: "integral-Regular  !important" }} >03.</Typography>
          <Typography variant='h5' sx={{ marginTop: { sm: '30px' } }}>Motto:</Typography>
          <Typography sx={{ marginTop: { sm: '30px' } }}>
          "Crafting Excellence, Tailoring Success."
          </Typography>
        </Box>
      </Box>
    </Box>

  )
}
