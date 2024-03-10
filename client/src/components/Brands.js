import React from 'react';
import Marquee from '../components/Marquee'; // Import the Marquee component
import logo1 from '../assets/images/brands/image1.png'
import logo2 from '../assets/images/brands/image2.png'
import logo3 from '../assets/images/brands/image3.png'
import logo4 from '../assets/images/brands/image4.png'
import logo5 from '../assets/images/brands/image5.png'
import logo6 from '../assets/images/brands/image6.png'
import logo7 from '../assets/images/brands/image7.png'
import logo8 from '../assets/images/brands/image8.png'
// Import other logos as needed

export const Brands = () => {
  // Define your logos array
  const logos = [logo1, logo2, logo3,logo4, logo5, logo6,logo7, logo8]; // Add more logos as needed

  return (
    <div className="brands-container" >
      {/* <h2>Brands</h2> */}
      <div className="marquee-wrapper">
        {/* Render the Marquee component with the logos array */}
        <Marquee logos={logos} />
      </div>
    </div>
  );
};

export default Brands;
