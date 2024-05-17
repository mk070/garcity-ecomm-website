import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import {Box, Typography} from "@mui/material"
import tops from "../../assets/images/productpage/1.avif"
import blacks from "../../assets/images/productpage/4.avif"
import tshirts from "../../assets/images/productpage/3.avif"
import colors from "../../assets/images/productpage/2.avif"
import { LazyLoadImage } from "react-lazy-load-image-component";



export const Slider = () => {
  return (
    <>
    <Box bgcolor="transparent"
        
       display="flex" sx={{
        alignItems:"center",
        justifyContent:"center",
        margin:{sm:'0 100px', xs:'-10px 0 0 0'},
        position:"relative",
      borderRadius:"20px",overflow:"hidden", 
      height: { sm: '390px' ,xs:"150px"},
      boxShadow:" rgba(0, 0, 0, 0.25) 0px 10px 20px -12px",
      marginBottom: '60px',
    }}>
      <Typography
          sx={{
            position: 'absolute',
            fontSize: {sm:'100px', xs:'40px'},
            zIndex: '100',
            color: 'white',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            fontFamily: 'integral-Regular !important',
            top: '50%', // Adjusted top value to center vertically
            transform: 'translateY(-50%) ', // Added this line to center vertically
            left: {sm:'350px', xs:'55px'}
          }}
        >
          Products
        </Typography>    
        <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide>
      <LazyLoadImage src={tops} sx={{ width: '100%' }} PlaceholderSrc={tops} alt="Image Alt" loading='lazy' effect='blur'/>
      </SwiperSlide>

      <SwiperSlide>
      <LazyLoadImage src={blacks} sx={{ width: '100%' }} PlaceholderSrc={blacks} alt="Image Alt" loading='lazy' effect='blur'/>
      </SwiperSlide>

      <SwiperSlide>
      <LazyLoadImage src={tshirts} sx={{ width: '100%' }} PlaceholderSrc={tshirts} alt="Image Alt" loading='lazy' effect='blur'/>
      </SwiperSlide>

      <SwiperSlide>
      <LazyLoadImage src={colors} sx={{ width: '100%' }} PlaceholderSrc={colors} alt="Image Alt" loading='lazy' effect='blur'/>
      </SwiperSlide>
    </Swiper>
    </Box>  

   

    </>
  )
}

