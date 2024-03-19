import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import './gallery.css'
import img1 from '../../assets/images/popularcollection/image1.png'
import img2 from '../../assets/images/popularcollection/image2.png'
import img3 from '../../assets/images/popularcollection/image3.png'
import img4 from '../../assets/images/popularcollection/image4.png'


function Scrollsection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-90vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "1000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
                <img width={'350px'} style={{marginRight:'100px', marginBottom:'80px'}} src={img1} alt="" />
                <img width={'350px'} style={{marginRight:'100px',marginTop:'70px'}} src={img2} alt="" />
                <img width={'350px'} style={{marginRight:'100px',marginTop:'70px'}} src={img3} alt="" />
                <img width={'350px'} style={{marginRight:'100px',marginTop:'70px'}} src={img4} alt="" />
                <img width={'350px'} style={{ marginBottom:'150px'}} src={img3} alt="" />
          </div>
          {/* <div className="scroll-section">
                 <img width={'350px'} style={{marginRight:'100px', marginBottom:'0px'}} src={img4} alt="" />
                <img width={'350px'} style={{marginRight:'100px',marginTop:'140px'}} src={img3} alt="" />
               
          </div> */}
          
        </div>
      </div>
    </section>
  );
}

export default Scrollsection;