import "../../styles/slider.css";
import { React, useEffect, useState } from 'react';
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Skeleton from '@mui/material/Skeleton';

// Default images
import slide_image_1 from '../../assets/images/popularcollection/1-min.avif';
import slide_image_2 from '../../assets/images/popularcollection/2-min.avif';
import slide_image_3 from '../../assets/images/popularcollection/3-min.avif';
import slide_image_4 from '../../assets/images/popularcollection/4-min.avif';
import slide_image_5 from '../../assets/images/popularcollection/5-min.avif';
import { useMediaQuery } from "@mui/material";

const default_images = [slide_image_1,slide_image_2,slide_image_3,slide_image_4,slide_image_5];

export const Homeslider = () => {
  const [images, setImages] = useState([]);
  const [imagesFetched, setImagesFetched] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/PopularWork/images');
        if (response.ok) {
          const images = await response.json();
          setImages(images);
          setImagesFetched(true);
        } else {
          console.error('Failed to fetch images');
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

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
  
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 100,
    slidesToShow: isSmallScreen ? 1 : 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1800, // Set autoplay speed in milliseconds
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="App">
      <Slider {...settings}>
        {imagesFetched && images.length > 0 ? (
          images.map((image, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "side slide"} key={idx}>
              <img loading="lazy" src={`data:${image.contentType};base64,${image.img}`} alt={image} />
            </div>
          ))
        ) : (
          default_images.map((img, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"} key={idx}>
              {/* Display default images immediately if no images are fetched */}
              <img src={img} loading="lazy" alt={`Default Image ${idx}`} />
            </div>
          ))
        )}
      </Slider>
    </div>
  );
}
