import { Splide, SplideSlide } from '@splidejs/react-splide';
import React from 'react';
import '@splidejs/splide/dist/css/splide.min.css';
// import { reviews } from './reviewsData';
import Quote from '../../assets/images/Home/testimonial/blockquote.svg';
import './Testimonial.css'
import { Typography } from '@mui/material';
import img1 from "../../assets/images/testimonial/Aviral Rawat.png"
import img2 from "../../assets/images/testimonial/Sidhvin.png"
import img3 from "../../assets/images/testimonial/Ajay Augustin.png"
import img4 from "../../assets/images/testimonial/Maharshi Divekar.png"
import img5 from "../../assets/images/testimonial/Kiran Bhodaipu.png"
import img6 from "../../assets/images/testimonial/Shree.png"

const Testimonial = () => {

     const reviews = [
        {
          id: 1,
          image: img1,
          name: ' Aviral Rawat - Founder of Mikiko',
          text: `Hey everyone! I just wanted to share my recent experience with GARCITY. I recently placed an order with them, and I have to say, I was blown away by the quality of their
              print and fabric. `
            },
        {
          id: 2,
          image:img2,
          name: 'Sidhvin - Founder of SWANKS',
          text: `Hey everyone! I just wanted to share my recent experience with GARCITY. I recently placed an order with them, and I have to say, I was blown away by the quality of their
          print and fabric.`
        },
        {
          id: 3,
          image:img3,
          name: 'Ajay Augustin - Founder / creative director of act of kindness clo.',
          text: `Hey everyone! I just wanted to share my recent experience with GARCITY. I recently placed an order with them, and I have to say, I was blown away by the quality of their
          print and fabric.`},
        {
          id: 4,
          image:img4,
          name: 'Maharshi Divekar - Founder of ECTIVE CLOTHING',
          text: `Hey everyone! I just wanted to share my recent experience with GARCITY. I recently placed an order with them, and I have to say, I was blown away by the quality of their
          print and fabric.`   },
        {
          id: 5,
          image:img5,
          name: ' Kiran Bhodaipu - Founder of OG TRENDZ',
          text: `Hey everyone! I just wanted to share my recent experience with GARCITY. I recently placed an order with them, and I have to say, I was blown away by the quality of their
          print and fabric.`},
        {
          id: 6,
          image:img6,
          name: 'Shree - Founder of BLUVOG',
          text: `Hey everyone! I just wanted to share my recent experience with GARCITY. I recently placed an order with them, and I have to say, I was blown away by the quality of their
          print and fabric.` },
      ];


  return (
    <section className="testimonial-container">
      <div className="title">
        <Typography sx={{fontSize:{sm:"32px", xs:'24px'}, fontFamily: "integral-Regular  !important" }}>Testimonial</Typography>
        <p>What members are saying.</p>
      </div>

      <div className="slider-container">
        <blockquote>
          <img className="top-quote quote" src={Quote} alt="quote" />
          <img className="bottom-quote quote" src={Quote} alt="quote" />
        </blockquote>

        <Splide
          options={{
            perPage: 1,
            autoplay: true,
            speed: 1000,
            rewind: true,
            rewindByDrag: true,
          }} >
          {reviews.map((review) => (
            <SplideSlide key={review.id}>
              <img className="review-img" src={review.image} alt="" />
              <div className="content">
                <p className="text">{review.text}</p>
                <div className="info">
                  <div className="rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                  </div>
                  <p className="user">{review.name}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Testimonial;