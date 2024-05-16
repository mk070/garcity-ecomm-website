import "../../styles/slider.css";
import { React, useEffect, useState } from 'react';
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


// Default  images
import slide_image_1 from '../../assets/images/gallery/1.avif';
import slide_image_2 from '../../assets/images/gallery/2.avif';
import slide_image_3 from '../../assets/images/gallery/3.avif';
import slide_image_4 from '../../assets/images/gallery/4.avif';
import slide_image_5 from '../../assets/images/gallery/5.avif';
import { useMediaQuery } from "@mui/material";

const default_images = [slide_image_1,slide_image_2,slide_image_3,slide_image_4,slide_image_5];


// export const Homeslider = () => {
//   const [images, setImages] = useState([]);
//   const [imagesFetched, setImagesFetched] = useState(false);

//   const fetchImages = async () => {
//     try {
//       const response = await fetch('/api/PopularWork/images');
//       if (response.ok) {
//         const images = await response.json();
//         setImages(images);
//         setImagesFetched(true);
//       } else {
//         console.error('Failed to fetch images');
//       }
//     } catch (error) {
//       console.error('Error fetching images:', error);
//     }
//   };

//   useEffect(() => {
//     fetchImages();
//   }, []);

//   const NextArrow = ({ onClick }) => {
//     return (
//       <div className="arrow next" onClick={onClick}>
//         <FaArrowRight />
//       </div>
//     );
//   };

//   const PrevArrow = ({ onClick }) => {
//     return (
//       <div className="arrow prev" onClick={onClick}>
//         <FaArrowLeft />
//       </div>
//     );
//   };

//   const [imageIndex, setImageIndex] = useState(0);

//   const settings = {
//     infinite: true,
//     lazyLoad: true,
//     speed: 300,
//     slidesToShow: 3,
//     centerMode: true,
//     centerPadding: 0,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     beforeChange: (current, next) => setImageIndex(next),
//   };

//   return (
//     <div className="App">
//   <Slider {...settings}>
//     {imagesFetched && images.length > 3 ? (
//       images.map((image, idx) => (
//         <div className={idx === imageIndex ? "slide activeSlide" : "slide"} key={idx}>
//           <img  loading='lazy'  src={`data:${image.contentType};base64,${image.img}`} alt={image} />
//         </div>
//       ))
//     ) : (
//       // Render default images when no images are fetched
//       default_images.map((img, idx) => (
//         <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
//           <img src={img}  loading='lazy'  alt={img} />
//         </div>
//       ))
//     )}
//   </Slider>
// </div>

//   );
// }

export const Homeslider = () => {
  const [images, setImages] = useState([]);
  const [imagesFetched, setImagesFetched] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

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

  useEffect(() => {
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
    speed: 300,
    slidesToShow: isSmallScreen? 1:3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 60000, // Set autoplay speed in milliseconds
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="App">
      <Slider {...settings}>
        {imagesFetched && images.length > 1 ? (
          images.map((image, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : " side slide"} key={idx}>
              <img  loading='lazy'  src={`data:${image.contentType};base64,${image.img}`} alt={image} />
            </div>
          ))
        ) : (
          // Render default images when no images are fetched
          default_images.map((img, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <img src={img}  loading='lazy'  alt={img} />
            </div>
          ))
        )}
      </Slider>
    </div>
  );
}
