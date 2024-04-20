import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Box, useMediaQuery } from "@mui/material";

// Import default images
import img1 from '../../assets/images/popularcollection/image1.png';
import img2 from '../../assets/images/popularcollection/image2.png';
import img3 from '../../assets/images/popularcollection/image3.png';

gsap.registerPlugin(ScrollTrigger);

function Scrollsection() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [images, setImages] = useState([]);
  const imageRefs = useRef([]);

  const fetchImages = async () => {
    try {
      const response = await fetch('/api/gallery/images');
      if (response.ok) {
        const images = await response.json();
        setImages(images);
      } else {
        console.error('Failed to fetch images');
        setImages([]);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
      setImages([]);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    // GSAP animation setup for each image individually
    imageRefs.current.forEach((ref, index) => {
      gsap.to(ref, {
        scrollTrigger: {
          trigger: ref,
          scrub: true
        },
        y: isSmallScreen? 0 : -70,
        stagger: isSmallScreen ? 0 : 6
      });
    });
  }, [images]);

  return (
    <>
      {images.length > 0 ? (
        <>
         <Box sx={{ display: 'flex', padding: { sm: '40px', xs: '5px' }, justifyContent: 'center', alignItems: 'center', flexDirection: { sm: "column", xs: 'column' } }}>

          <Box sx={{ display:"flex", flexDirection:{sm:'row'} }}>
            {images.slice(0, 3).map((image, index) => (
              <Box key={index} ref={el => imageRefs.current[index] = el} sx={{  mr: { sm: '30px' ,xs:'8px'},width: { sm: '350px' }, marginBottom: isSmallScreen ? '20px' : '' }}>
                <img src={`data:${image.contentType};base64,${image.img}`} alt="" width={'100%'} />
              </Box>
            ))}
          </Box>
          <Box sx={{display:"flex",flexDirection:{sm:'row'}  }}>
            {images.slice(3, 6).map((image, index) => (
              <Box key={index + 3} ref={el => imageRefs.current[index + 3] = el} sx={{ mr: { sm: '30px' ,xs:'8px'}, width: { sm: '350px' }, marginBottom: isSmallScreen ? '20px' : '' }}>
                <img src={`data:${image.contentType};base64,${image.img}`} alt="" width={'100%'} />
              </Box>
            ))}
          </Box>
          <Box sx={{display:"flex",flexDirection:{sm:'row'} }}>
            {images.slice(6, 9).map((image, index) => (
              <Box key={index + 6} ref={el => imageRefs.current[index + 6] = el} sx={{ mr: { sm: '30px',xs:'8px'},  width: { sm: '350px' }, marginBottom: isSmallScreen ? '50px' : '' }}>
                <img src={`data:${image.contentType};base64,${image.img}`} alt="" width={'100%'} />
              </Box>
            ))}
          </Box>
          </Box>
        </>
      ) : (
        <>
        <Box sx={{ display: 'flex', padding: { sm: '40px', xs: '5px' }, justifyContent: 'center', alignItems: 'center', flexDirection: { sm: "row", xs: 'row' } }}>

            <Box sx={{mr:{sm:'30px'}}}>
              <Box className="img" sx={{width:{sm:'350px'}, marginBottom:isSmallScreen?'50px':''}}><img src={img1} width={'100%'} alt="" srcset="" /></Box>
              <Box className="img" sx={{width:{sm:'350px'}, marginBottom:isSmallScreen?'50px':'' }}> <img src={img2} width={'100%'}  alt="" srcset="" /></Box>
              <Box className="img" sx={{width:{sm:'350px'},  marginBottom:isSmallScreen?'50px':''}}><img src={img3} width={'100%'} alt="" srcset="" /></Box>
            </Box>
            <Box sx={{mr:{sm:'30px'}}}>
              <Box className="img" sx={{width:{sm:'350px'}, marginBottom:isSmallScreen?'50px':''}}><img  width={'100%'}src={img2} alt="" srcset="" /></Box>
              <Box className="img" sx={{width:{sm:'350px'}, marginBottom:isSmallScreen?'50px':''}}> <img width={'100%'} src={img3} alt="" srcset="" /></Box>
              <Box className="img" sx={{width:{sm:'350px'}, marginBottom:isSmallScreen?'50px':''}}><img  width={'100%'}src={img1} alt="" srcset="" /></Box>
            </Box>
            <Box>
              <Box className="img" sx={{width:{sm:'350px'}, marginBottom:isSmallScreen?'50px':''}}> <img width={'100%'} src={img3} alt="" srcset="" /></Box>
              <Box className="img" sx={{width:{sm:'350px'}, marginBottom:isSmallScreen?'50px':''}}><img  width={'100%'}src={img2} alt="" srcset="" /></Box>
              <Box className="img" sx={{width:{sm:'350px'}, marginBottom:isSmallScreen?'50px':''}}><img  width={'100%'}src={img1} alt="" srcset="" /></Box>
            </Box>
          </Box>
        </>
      )}
    </>
  );
}

export default Scrollsection;



// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Box, useMediaQuery } from "@mui/material";
 

// import img1 from '../../assets/images/popularcollection/image1.png';
// import img2 from '../../assets/images/popularcollection/image2.png';
// import img3 from '../../assets/images/popularcollection/image3.png';
// import img4 from '../../assets/images/popularcollection/image4.png';
// gsap.registerPlugin(ScrollTrigger);

// function Scrollsection() {
//   const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

//   useEffect(() => {
//     gsap.to('.img', {
//       scrollTrigger: {
//         trigger: '.img',
//         scrub: true
//       },
//       y: -70,
//       stagger: 0.2
//     });
//   }, []);

//   return (
//     <Box  sx={{display:'flex', padding :{sm:'40px',xs:'25px'}, justifyContent:'center'  ,flexDirection:{sm:"row", xs:'column'},
    
//     }}>
//       <Box sx={{mr:{sm:'30px'}}}>
//         <Box className="img" sx={{width:{sm:'350px'},
//       marginBottom:isSmallScreen?'50px':''
//       }}><img src={img2} width={'100%'} alt="" srcset="" /></Box>
//         <Box className="img" sx={{width:{sm:'350px'}, marginBottom:isSmallScreen?'50px':'' }}> <img src={img1}width={'100%'}  alt="" srcset="" /></Box>
//         <Box className="img" sx={{width:{sm:'350px'},  marginBottom:isSmallScreen?'50px':''}}><img src={img2} width={'100%'} alt="" srcset="" /></Box>
//       </Box>
//       <Box sx={{mr:{sm:'30px'}}}>
//         <Box className="img" sx={{width:{sm:'350px'}, marginBottom:isSmallScreen?'50px':''}}><img  width={'100%'}src={img3} alt="" srcset="" /></Box>
//         <Box className="img" sx={{width:{sm:'350px'}, marginBottom:isSmallScreen?'50px':''}}> <img width={'100%'} src={img2} alt="" srcset="" /></Box>
//         <Box className="img" sx={{width:{sm:'350px'}, marginBottom:isSmallScreen?'50px':''}}><img  width={'100%'}src={img1} alt="" srcset="" /></Box>
//       </Box>
//       <Box>
//         <Box className="img" sx={{width:{sm:'350px'}, marginBottom:isSmallScreen?'50px':''}}> <img width={'100%'} src={img3} alt="" srcset="" /></Box>
//         <Box className="img" sx={{width:{sm:'350px'}, marginBottom:isSmallScreen?'50px':''}}><img  width={'100%'}src={img2} alt="" srcset="" /></Box>
//         <Box className="img" sx={{width:{sm:'350px'}, marginBottom:isSmallScreen?'50px':''}}><img  width={'100%'}src={img1} alt="" srcset="" /></Box>
//       </Box>

//       {/* You can add more sections with images as needed */}
//     </Box>
//   );
// }

// export default Scrollsection;
