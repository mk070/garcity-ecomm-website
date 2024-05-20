import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Box, useMediaQuery } from '@mui/material';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Autoplay, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import img1 from '../../assets/images/Home/banner/img1.avif';
import img2 from '../../assets/images/Home/banner/img2.avif';
import img3 from '../../assets/images/Home/banner/img3.avif';
import img4 from '../../assets/images/Home/banner/img4.avif';
import './Herosection.css'
import '../../App.css'
import { LazyLoadImage } from "react-lazy-load-image-component";

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
          nextEl: ' .swiper-button-next',
          prevEl: ' .swiper-button-prev' ,
        }}
      >
        <SwiperSlide>
          
          <Box sx={{ position: 'relative',objectFit:"contain" }}>
            {/* <div className='blur-load' style={{backgroundImage:{img1Small}}}></div>*/}            
            {/* <img src={img1} style={{ width: '100%' }} alt="Slide 1" loading='lazy' />  */}
            <LazyLoadImage src={img1} sx={{ width: '100%' }} PlaceholderSrc={img1} alt="Image Alt" loading='lazy' effect='blur'/>
            {/* <Box sx={{ position: 'absolute',backgroundColor:"#DF9573", color: '#FFF4F1', 
            top: '50%', left: '50%', padding:'50px 20px', borderRadius:'60px 0 60px 0',  transform: 'translate(-50%, -50%)', textAlign: 'center', height:{xs:'40px'} }}>
              <Typography variant={"h4"} sx={{fontSize:{lg:'35px', xs:'20px'}, margin:'0',}}>Content for Slide 1</Typography>
              <Typography variant="body1" sx={{display:{xs:'none', sm:'block'}}}>Additional content goes here...</Typography>
            </Box> */}
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box sx={{ position: 'relative' }}>
            <img src={img2} style={{ width: '100%',objectFit:"fill" }} alt="Slide 2" loading='lazy'  />
            {/* <Box sx={{ position: 'absolute',backgroundColor:"#FFF4F1", top: '50%', left: '50%', padding:'50px 20px', borderRadius:'0 60px 0 60px',  transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#372B29',height:{xs:'40px'} }}>
              <Typography variant="h4" sx={{fontSize:{lg:'35px', xs:'20px'}, margin:'0',}}>Content for Slide 2</Typography>
              <Typography variant="body1" sx={{display:{xs:'none', sm:'block'}}}>Additional content goes here...</Typography>
            </Box> */}
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{ position: 'relative' }}>
            <img src={img3} style={{ width: '100%',objectFit:"fill" }} alt="Slide 3"  loading='lazy' />
            {/* <Box sx={{ position: 'absolute', backgroundColor:"#DF9573",color: '#FFF4F1',top: '50%', padding:'50px 20px', borderRadius:'60px 0 60px 0', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
              <Typography variant="h4" sx={{fontSize:{lg:'35px', xs:'20px'}, margin:'0',}}>Content for Slide 3</Typography>
              <Typography variant="body1" sx={{display:{xs:'none', sm:'block'}}}>Additional content goes here...</Typography>
            </Box> */}
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{ position: 'relative' }}>
            <img src={img4} style={{ width: '100%',objectFit:"fill" }} alt="Slide 4"  loading='lazy' />
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
        top: isSmallScreen ? '62%' : '50%', 
        width: isSmallScreen ? "30px" : "40px",
        height: isSmallScreen ? "30px" : "40px",
        transform: 'translateY(-50%)',
        borderRadius: '50%', // Circular shape
        cursor: 'pointer', // Cursor changes to pointer on hover
        zIndex: '1000', // Higher z-index to appear above the swiper
    }}>
        <FaArrowLeft /> {/* Render the left arrow icon */}
    </div>
    <div className="swiper-button-next" style={{ 
        right: '10px', 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
        color: '#fff', // White text color
        padding: '10px', 
        position: 'absolute', 
        top: isSmallScreen ? '70%' : '50%', 
        width: isSmallScreen ? "30px" : "40px",
        height: isSmallScreen ? "30px" : "40px",
        transform: 'translateY(-90%)',
        borderRadius: '50%', // Circular shape
        cursor: 'pointer', // Cursor changes to pointer on hover
        zIndex: '1000', // Higher z-index to appear above the swiper
    }}>
        <FaArrowRight /> {/* Render the right arrow icon */}
    </div>

    </Box>
  );
};
