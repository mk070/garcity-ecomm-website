import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Box, useMediaQuery } from "@mui/material";
import Text from "./Text";
import img1 from '../../assets/images/gallery/banner.avif';


import './gallery.css';
import { LazyLoadImage } from "react-lazy-load-image-component";

const Hero = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: 3,
      },
    });

    tl.to(sectionRef.current, {
      scale: 0.8,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="container" style={{ position: 'relative' }}>
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scaleDown">
          <div className="main-section">
             <Text />
             <LazyLoadImage src={img1} sx={{ width:'100%', marginTop:isSmallScreen?'0':'',marginRight: '0px', marginBottom: '80px' }} PlaceholderSrc={img1} alt="Image Alt" loading='lazy' effect='blur'/>

              {/* <img width={'100%'} style={{ marginTop:isSmallScreen?'0':'',marginRight: '0px', marginBottom: '80px' }} src={img1} alt="" /> */}
             <Box sx={{position:'absolute',bottom:{sm:'-70px',xs:"-190px"},left:"51%", width:{sm:'30%'}}}>
               <div class="mouse"></div>
             </Box>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
