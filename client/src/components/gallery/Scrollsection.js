// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/all";
// import { Box } from "@mui/material";


// import './gallery.css';
// import img1 from '../../assets/images/popularcollection/image1.png';
// import img2 from '../../assets/images/popularcollection/image2.png';
// import img3 from '../../assets/images/popularcollection/image3.png';
// import img4 from '../../assets/images/popularcollection/image4.png';

// const Scrollsection = () => {
//   const sectionRef = useRef(null);
//   const triggerRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const pin = gsap.fromTo(
//       sectionRef.current,
//       {
//         translateX: 0,
//       },
//       {
//         translateX: "-90vw",
//         ease: "none",
//         duration: 1,
//         scrollTrigger: {
//           trigger: triggerRef.current,
//           start: "top top",
//           end: "1000 top",
//           scrub: 0.6,
//           pin: true,
//         },
//       }
//     );

//     return () => {
//       pin.kill();
//     };
//   }, []);

//   return (
//     <section className="scroll-section-outer" style={{position:'relative'}}>
//       <Box sx={{marginLeft:{sm:'150px'}}}> 
//         <svg  
//                     style={{
//                     position:'absolute',
//                     top:'0px'
                    
//                     }}  width="3cm" height="130cm" viewBox="0 0 400 600"
//                         xmlns="http://www.w3.org/2000/svg" version="1.1">
                    
//                         <path d="M375,300 v-20750" fill="yellow" stroke="#372b29" stroke-width="3" />

//         </svg>
//         </Box>
//         <Box sx={{marginLeft:{sm:'700px'}}}>
//           <svg  
//                       style={{
//                       position:'absolute',
//                       top:'0px'
                      
//                       }}  width="3cm" height="130cm" viewBox="0 0 400 600"
//                           xmlns="http://www.w3.org/2000/svg" version="1.1">
                      
//                           <path d="M275,300 v-20750" fill="yellow" stroke="#372b29" stroke-width="3" />

//           </svg>
//         </Box>
//         <Box sx={{marginLeft:{sm:'1200px'}}}>
//           <svg  
//                       style={{
//                       position:'absolute',
//                       top:'0px'
                      
//                       }}  width="3cm" height="130cm" viewBox="0 0 400 600"
//                           xmlns="http://www.w3.org/2000/svg" version="1.1">
                      
//                           <path d="M275,300 v-20750" fill="yellow" stroke="#372b29" stroke-width="3" />

//           </svg>
//         </Box>
//       <div ref={triggerRef}>
//         <div ref={sectionRef} className="scroll-section-inner">
//           <div className="scroll-section">
//             <img width={'350px'} style={{marginRight:'100px', marginBottom:'80px'}} src={img1} alt="" />
//             <img width={'350px'} style={{marginRight:'100px',marginTop:'20px'}} src={img2} alt="" />
//             <img width={'350px'} style={{marginRight:'100px',marginTop:'100px'}} src={img4} alt="" />
//             <img width={'350px'} style={{marginRight:'100px',marginTop:'10px'}} src={img3} alt="" />
//             <img width={'350px'} style={{marginRight:'100px',marginTop:'70px'}} src={img2} alt="" />
//             <img width={'350px'} style={{marginRight:'100px',marginTop:'70px'}} src={img3} alt="" />
//             <img width={'350px'} style={{ marginBottom:'150px'}} src={img3} alt="" />
//           </div>
//         </div>
//       </div>
      
//     </section>
//   );
// }

// export default Scrollsection;

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Box, useMediaQuery } from "@mui/material";
 

import img1 from '../../assets/images/popularcollection/image1.png';
import img2 from '../../assets/images/popularcollection/image2.png';
import img3 from '../../assets/images/popularcollection/image3.png';
import img4 from '../../assets/images/popularcollection/image4.png';
gsap.registerPlugin(ScrollTrigger);

function Scrollsection() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  useEffect(() => {
    gsap.to('.img', {
      scrollTrigger: {
        trigger: '.img',
        scrub: true
      },
      y: -70,
      stagger: 0.2
    });
  }, []);

  return (
    <Box  sx={{display:'flex', padding :{sm:'40px',xs:'25px'}, justifyContent:'center'  ,flexDirection:{sm:"row", xs:'column'},
    
    }}>
      <Box sx={{mr:{sm:'30px'}}}>
        <Box className="img" sx={{width:{sm:'350px'},
      marginBottom:isSmallScreen?'50px':''
      }}><img src={img2} width={'100%'} alt="" srcset="" /></Box>
        <Box className="img" sx={{width:{sm:'350px'}, marginBottom:isSmallScreen?'50px':'' }}> <img src={img1}width={'100%'}  alt="" srcset="" /></Box>
        <Box className="img" sx={{width:{sm:'350px'},  marginBottom:isSmallScreen?'50px':''}}><img src={img3} width={'100%'} alt="" srcset="" /></Box>
      </Box>
      <Box sx={{mr:{sm:'30px'}}}>
        <Box className="img" sx={{width:{sm:'350px'}, marginBottom:isSmallScreen?'50px':''}}><img  width={'100%'}src={img3} alt="" srcset="" /></Box>
        <Box className="img" sx={{width:{sm:'350px'}, marginBottom:isSmallScreen?'50px':''}}> <img width={'100%'} src={img2} alt="" srcset="" /></Box>
        <Box className="img" sx={{width:{sm:'350px'}, marginBottom:isSmallScreen?'50px':''}}><img  width={'100%'}src={img1} alt="" srcset="" /></Box>
      </Box>
      <Box>
        <Box className="img" sx={{width:{sm:'350px'}, marginBottom:isSmallScreen?'50px':''}}> <img width={'100%'} src={img3} alt="" srcset="" /></Box>
        <Box className="img" sx={{width:{sm:'350px'}, marginBottom:isSmallScreen?'50px':''}}><img  width={'100%'}src={img2} alt="" srcset="" /></Box>
        <Box className="img" sx={{width:{sm:'350px'}, marginBottom:isSmallScreen?'50px':''}}><img  width={'100%'}src={img1} alt="" srcset="" /></Box>
      </Box>

      {/* You can add more sections with images as needed */}
    </Box>
  );
}

export default Scrollsection;



