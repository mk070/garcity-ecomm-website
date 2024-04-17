// import { Box, Typography, useMediaQuery,Button  } from '@mui/material';
// import React from 'react';
// import '../../App.css'
// import { Banner } from './Banner';

// export const Herosection = () => {
//   const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: isSmallScreen ? 'column-reverse': 'row',
      
//         alignItems: 'center',
//         padding: isSmallScreen ? '0': '0 130px',
//         height: isSmallScreen ? '87vh':'95vh', // Adjust height to auto for responsiveness
//         position: 'relative'  
//       }}
//     >

        
//         <Box
//             sx={{
//             flex: 1,
//             padding: '0 20px',
//             width: '100%', // Full width on small screens
//             marginBottom: isSmallScreen ? '20px' : '0', // Add margin bottom on small screens
//             }}
//         >
//             <Typography
//                 variant='h3'
//                 sx={{
//                     fontSize:isSmallScreen ? '30px':'60px',
//                     fontFamily: ['integral-Regular'].join(','),
//                     marginBottom: '1px',
//                 }}
//             >
//                 KINGDOM OF <span style={{ fontFamily: ['integral-Regular'].join(','),color: '#DF9573' }}>CUSTOMISATION</span><br /><br />
//             </Typography>
              
//             <Typography mt={'10px'} variant='body1' sx={{fontSize:isSmallScreen ? '12px' : '18px',}}>
//             Your destination for custom clothing !
//             From premium fabric to superior finish, we assist in
//             launching your brand with custom clothing & printing
//             services! 
//             </Typography>

//             <Button sx={{
//               background:'#DF9573',
//               mt: isSmallScreen ? '20px' : '60px',
//               borderRadius:'30px',
//               '&:hover': {
//                 backgroundColor: '#1E1E1E', 
//                 color:'',// Add hover effect
//                 transition: 'background-color 0.3s ease-in-out',
//               },
//             }} variant="contained">Know More</Button>

//         </Box>

//         <Banner />

      
//     </Box>
    



//   )
// }

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { Autoplay, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import img1 from '../../assets/images/Home/banner/img1.jpg';
import img2 from '../../assets/images/Home/banner/img2.jpg';
import img3 from '../../assets/images/Home/banner/img3.jpg';
import img4 from '../../assets/images/Home/banner/img4.jpg';
import './Herosection.css'

SwiperCore.use([Navigation, Autoplay]); // Add Autoplay to the list of SwiperCore modules

export const Herosection = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Box
      bgcolor="transparent"
      display="flex"
      sx={{
        overflow: 'hidden',
        height: isSmallScreen ? '' : '91vh',
        mt:'-10px',
        mb: { sm: '80px', xs: '10px' },
        position: 'relative', // Add this style for positioning the buttons
      }}
    >
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ // Configure autoplay settings here
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: ' .swiper-button-prev' ,
        }}
      >
        <SwiperSlide>
          
          <Box sx={{ position: 'relative',objectFit:"contain" }}>
            <img src={img1} style={{ width: '100%' }} alt="Slide 1" />
            {/* <Box sx={{ position: 'absolute',backgroundColor:"#DF9573", color: '#FFF4F1', 
            top: '50%', left: '50%', padding:'50px 20px', borderRadius:'60px 0 60px 0',  transform: 'translate(-50%, -50%)', textAlign: 'center', height:{xs:'40px'} }}>
              <Typography variant={"h4"} sx={{fontSize:{lg:'35px', xs:'20px'}, margin:'0',}}>Content for Slide 1</Typography>
              <Typography variant="body1" sx={{display:{xs:'none', sm:'block'}}}>Additional content goes here...</Typography>
            </Box> */}
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box sx={{ position: 'relative' }}>
            <img src={img2} style={{ width: '100%',objectFit:"fill" }} alt="Slide 2" />
            {/* <Box sx={{ position: 'absolute',backgroundColor:"#FFF4F1", top: '50%', left: '50%', padding:'50px 20px', borderRadius:'0 60px 0 60px',  transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#372B29',height:{xs:'40px'} }}>
              <Typography variant="h4" sx={{fontSize:{lg:'35px', xs:'20px'}, margin:'0',}}>Content for Slide 2</Typography>
              <Typography variant="body1" sx={{display:{xs:'none', sm:'block'}}}>Additional content goes here...</Typography>
            </Box> */}
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{ position: 'relative' }}>
            <img src={img3} style={{ width: '100%',objectFit:"fill" }} alt="Slide 3" />
            {/* <Box sx={{ position: 'absolute', backgroundColor:"#DF9573",color: '#FFF4F1',top: '50%', padding:'50px 20px', borderRadius:'60px 0 60px 0', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
              <Typography variant="h4" sx={{fontSize:{lg:'35px', xs:'20px'}, margin:'0',}}>Content for Slide 3</Typography>
              <Typography variant="body1" sx={{display:{xs:'none', sm:'block'}}}>Additional content goes here...</Typography>
            </Box> */}
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{ position: 'relative' }}>
            <img src={img4} style={{ width: '100%',objectFit:"fill" }} alt="Slide 4" />
            {/* <Box sx={{ position: 'absolute',backgroundColor:"#FFF4F1", top: '50%', left: '50%',  padding:'50px 20px', borderRadius:'0 60px 0 60px', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#372B29' }}>
              <Typography variant="h4" sx={{fontSize:{lg:'35px', xs:'20px'}, margin:'0',}}>Content for Slide 4</Typography>
              <Typography variant="body1" sx={{display:{xs:'none', sm:'block'}}}>Additional content goes here...</Typography>
            </Box> */}
          </Box>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button-prev" style={{ 
        left: '10px', 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
        color: '#fff', // White text color
        padding: '10px', 
        position: 'absolute', 
        top:isSmallScreen ?'62%' : '50%', 
        width:isSmallScreen?"30px":"40px",
        height:isSmallScreen?"30px":"40px",
        transform: 'translateY(-50%)',
        borderRadius: '50%', // Circular shape
        cursor: 'pointer', // Cursor changes to pointer on hover
        zIndex: '1000', // Higher z-index to appear above the swiper
      }}>
         {/* Render a left arrow */}
      </div>
      <div className="swiper-button-next" style={{ 
        right: '10px', 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
        color: '#fff', // White text color
        padding: '10px', 
        position: 'absolute', 
        top:isSmallScreen ?'70%' : '50%', 
        width:isSmallScreen?"30px":"40px",
        height:isSmallScreen?"30px":"40px",
        transform: 'translateY(-90%)',
        borderRadius: '50%', // Circular shape
        cursor: 'pointer', // Cursor changes to pointer on hover
        zIndex: '1000', // Higher z-index to appear above the swiper
      }}>
        {/* Render a right arrow */}
      </div>
    </Box>
  );
};
