import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Box, useMediaQuery } from "@mui/material";
import img1 from '../../assets/images/gallery/banner.jpg';
import Text from "./Text";

import './gallery.css';

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
             <Box sx={{position:'absolute',bottom:'-70px',left:"51%", width:{sm:'30%'}}}>
             <div class="mouse"></div>
             </Box>
              <img width={'100%'} style={{ marginTop:isSmallScreen?'300px':'',marginRight: '0px', marginBottom: '80px' }} src={img1} alt="" />
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
