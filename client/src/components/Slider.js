<<<<<<< HEAD
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import {Box, Container, Typography, useMediaQuery} from "@mui/material"
import tops from "../images/1.png"
import blacks from "../images/4.png"
import tshirts from "../images/3.png"
import colors from "../images/2.png"


export const Slider = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <>
    <Box bgcolor="transparent" mx={isSmallScreen ? 2 : 10} 
    
    marginTop= "68px"  height={400} display="flex" sx={{
    borderRadius:"20px",overflow:"hidden", 
    height: isSmallScreen ? '200px': '350px',
    boxShadow:" rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
    marginBottom: '100px',
  }}>
    
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
        <img src={tops} style={{width:"100%"}} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={blacks} style={{width:"100%"}} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={tshirts} style={{width:"100%"}} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={colors} style={{width:"100%"}} />
      </SwiperSlide>
    </Swiper>
    </Box>  

   

    </>
  )
}
=======
import "../styles/slider.css";
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Import your images
import slide_image_1 from '../assets/images/popularcollection/image1.png';
import slide_image_2 from '../assets/images/popularcollection/image2.png';
import slide_image_3 from '../assets/images/popularcollection/image3.png';
import slide_image_4 from '../assets/images/popularcollection/image4.png';
import slide_image_5 from '../assets/images/popularcollection/image5.png';

const images = [slide_image_1,slide_image_2,slide_image_3,slide_image_4,slide_image_5];

export const Slidercom = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="App">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

>>>>>>> 926ab9058d625a59bc5213129ad3dff59e9aaee2
