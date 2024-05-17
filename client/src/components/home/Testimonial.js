import { Splide, SplideSlide } from '@splidejs/react-splide';
import React from 'react';
import '@splidejs/splide/dist/css/splide.min.css';
// import { reviews } from './reviewsData';
import Quote from '../../assets/images/Home/testimonial/blockquote.svg';
import './Testimonial.css'
import { Typography } from '@mui/material';
import { Box, useMediaQuery } from "@mui/material";
import img1 from "../../assets/images/testimonial/Aviral Rawat.avif"
import img2 from "../../assets/images/testimonial/Sidhvin.avif"
import img3 from "../../assets/images/testimonial/Ajay Augustin.avif"
import img4 from "../../assets/images/testimonial/Maharshi Divekar.avif"
import img5 from "../../assets/images/testimonial/Kiran Bhodaipu.avif"
import img6 from "../../assets/images/testimonial/Shree.avif"

const Testimonial = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

     const reviews = [
        {
          id: 1,
          image: img1,
          name: ' Aviral Rawat - Founder of Mikiko',
          text: `Hey everyone! I just wanted to share my recent experience with GARCITY. I recently
          placed an order with them, and I have to say, I was blown away by the quality of their
          print and fabric. It was truly amazing! What's even more impressive is that their prices
          are incredibly affordable. So if you're a clothing brand just starting out, I highly
          recommend GARCITY. You won't be disappointed! They're the real deal, offering topnotch quality at unbeatable prices. Trust me, you won't regret choosing them for your
          manufacturing needs. `,
          mobilereview: `GARCITY exceeded my expectations with their exceptional print and fabric quality,
          offering unbeatable prices. Highly recommended for clothing brands seeking top-notch
          manufacturing services.`
            },
        {
          id: 2,
          image:img2,
          name: 'Sidhvin - Founder of SWANKS',
          text: `GARCITY truly distinguishes itself as one of the leading manufacturers in Tirupur! What
          sets them apart is not just their exceptional craftsmanship, but also their warm and
          approachable customer service. Sumetha Mam's attentive care adds a personal touch
          that truly makes a difference. Moreover, their professionalism permeates every facet of
          their work, ensuring that each project is executed with precision and dedication. For
          anyone in search of top-tier manufacturing services, GARCITY stands out as the ultimate
          choice.`,
          mobilereview:`GARCITY stands out among Tirupur manufacturers for their exceptional craftsmanship
          and personalized customer service. Sumetha Mam's attentive care adds a personal
          touch, making them the ultimate choice for top-tier manufacturing services.`
        },
        {
          id: 3,
          image:img3,
          name: 'Ajay Augustin - Founder / creative director of act of kindness clo.',
          text: `Working with GARCITY was an absolute pleasure! Their communication was
          exceptional, ensuring clarity and transparency at every step of the process. Not only did
          they deliver amazing work, but their customer service and interactions were also
          outstanding. I was impressed by the quality they produced within a short timeframe,
          showcasing their dedication and efficiency. I highly recommend GARCITY to anyone in
          need of top-notch quality and unparalleled customer support.`,
        mobilereview:`Working with GARCITY was a pleasure! Impressed by their exceptional communication
        and efficiency, delivering top-notch quality within a short timeframe. Highly
        recommended for unparalleled support.`
      },
        {
          id: 4,
          image:img4,
          name: 'Maharshi Divekar - Founder of ECTIVE CLOTHING',
          text: `We extend our deepest gratitude for your exceptional work at Ective Clothing. Your
          dedication and attention to detail have been instrumental in bringing our vision to life.
          With your expertise, we've delivered high-quality activewear that our customers love.
          Special thanks to Sumetha Ma'am for her constant support.
          Thank you for your unwavering commitment and unmatched skills. You are an integral
          part of our success, and we look forward to continuing this journey together.`,
          mobilereview: `Grateful for GARCITY's exceptional work at Ective Clothing! Their dedication and
           attention to detail brought our vision to life, delivering high-quality activewear our
            customers love. Special thanks to Sumetha Ma'am for her constant support.`   ,
      },
        {
          id: 5,
          image:img5,
          name: ' Kiran Bhodaipu - Founder of OG TRENDZ',
          text: `GARCITY exceeded my expectations with their exceptional quality and prompt
          responses. From the initial inquiry to the final product delivery, their team demonstrated
          professionalism and attention to detail. The garments produced were of outstanding
          quality, surpassing industry standards. Additionally, their team's responsiveness and
          communication throughout the process were commendable, ensuring a smooth and
          seamless experience. It was evident that GARCITY prioritizes customer satisfaction and
          delivers nothing short of excellence. I highly recommend their services to anyone
          seeking top-quality products and exceptional customer support.`,
          mobilereview:`  GARCITY's exceptional quality and prompt responses exceeded my expectations. Their
          professionalism and attention to detail, coupled with outstanding garment quality, make
          them highly recommended.`},
        {
          id: 6,
          image:img6,
          name: 'Shree - Founder of BLUVOG',
          text: `I had the opportunity to work with GARCITY, and I must say, their customer care,
          support, and quality of service were truly outstanding. From the moment I engaged with
          them, their team went above and beyond to ensure that all my needs were met and that I
          felt supported throughout the process. Their attention to detail and commitment to
          delivering top-notch quality products were evident in every interaction. I was thoroughly
          impressed by their professionalism, prompt responses, and willingness to accommodate
          my specific requirements. Working with GARCITY was a seamless and enjoyable
          experience, and I would highly recommend them to anyone seeking unparalleled service
          and exceptional quality.`,
          mobilereview:`GARCITY's exceptional customer care, support, and quality service stood out. Their
          professionalism, prompt responses, and attention to detail make them highly
          recommended. ` },
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
               {isSmallScreen ? 
                (<p className="text">{review.mobilereview}</p>
                  ):(
                    <p className="text">{review.text}</p>
                )}
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