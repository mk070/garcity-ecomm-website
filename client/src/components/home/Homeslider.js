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

export const Homeslider = () => {
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
