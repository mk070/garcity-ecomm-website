import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Box, useMediaQuery } from "@mui/material";

// Import default images
import img1 from '../../assets/images/gallery/1.avif';
import img2 from '../../assets/images/gallery/2.avif';
import img3 from '../../assets/images/gallery/3.avif';
import img4 from '../../assets/images/gallery/4.avif';
import img5 from '../../assets/images/gallery/5.avif';
import img6 from '../../assets/images/gallery/6.avif';
import img7 from '../../assets/images/gallery/7.avif';
import img8 from '../../assets/images/gallery/8.avif';
import img9 from '../../assets/images/gallery/9.avif';

gsap.registerPlugin(ScrollTrigger);

const defaultimages = [img1,img2,img3,img4,img5,img6,img7,img8,img9]

function Scrollsection() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [images, setImages] = useState([]);
  const imageRefs = useRef([]);
  const imgRefs = useRef([]);


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

  // useEffect(() => {
  //   // GSAP animation setup for each image individually
  //   imageRefs.current.forEach((ref, index) => {
  //     gsap.to(ref, {
  //       scrollTrigger: {
  //         trigger: ref,
  //         scrub: true
  //       },
  //       y: isSmallScreen? 0 : -70,
  //       stagger: isSmallScreen ? 0 : 6
  //     });
  //   });
  // }, [images]);

  useEffect(() => {
    gsap.to(imgRefs.current, {
      y: isSmallScreen ? -50 :-180,
      stagger:isSmallScreen ?  0.8 : 0.2,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: imgRefs.current,
        scrub: true,
      },
    });
  }, [images]);
  const renderImages = () => {
    return images.map((image, index) => (
      <Box key={index} ref={el => (imgRefs.current[index] = el)} className="img" sx={{ width: { sm: '350px' }, marginBottom: '30px' }}>
        <img src={`data:${image.contentType};base64,${image.img}`} width={'100%'} alt="" />
      </Box>
    ));
  };

  return (
    <>
      {images.length > 0 ? (
        <>
        <Box
            sx={{
              display: 'flex',
              padding: { sm: '40px', xs: '5px' },
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: { sm: 'row', xs: 'row' },
            }}
          >
            <Box sx={{ mr: { sm: '30px' } }}>
              {images.slice(0, 3).map((image, index) => (
                <Box key={index} ref={el => (imgRefs.current[index] = el)} className="img" sx={{ width: { sm: '350px' }, marginBottom: isSmallScreen ? '30px' : '' }}>
                  <img src={`data:${image.contentType};base64,${image.img}`} width={'100%'} alt="" />
                </Box>
              ))}
            </Box>
            <Box sx={{ mr: { sm: '30px' } }}>
              {images.slice(3, 6).map((image, index) => (
                <Box key={index + 3} ref={el => (imgRefs.current[index + 3] = el)} className="img" sx={{ width: { sm: '350px' }, marginBottom: isSmallScreen ? '30px' : '' }}>
                  <img src={`data:${image.contentType};base64,${image.img}`} width={'100%'} alt="" />
                </Box>
              ))}
            </Box>
            <Box>
              {images.slice(6, 9).map((image, index) => (
                <Box key={index + 6} ref={el => (imgRefs.current[index + 6] = el)} className="img" sx={{ width: { sm: '350px' }, marginBottom: isSmallScreen ? '30px' : '' }}>
                  <img src={`data:${image.contentType};base64,${image.img}`} width={'100%'} alt="" />
                </Box>
              ))}
            </Box>
          </Box>
        </>
      ) : (
        <>
        {isSmallScreen ? (
          <>
            <Box
              sx={{
                display: 'flex',
                padding: { sm: '40px 0px 0px 0px', xs: '5px 40px' },
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection:  'column' ,
              }}
            >
              <Box sx={{ mr: { sm: '30px' } }}>
                <Box ref={el => (imgRefs.current[0] = el)} className="img" sx={{ width: { sm: '350px' }, marginBottom: isSmallScreen ? '30px' : '' }}>
                  <img src={img1} width={'100%'} alt="" />
                </Box>
                <Box ref={el => (imgRefs.current[1] = el)} className="img" sx={{ width: { sm: '350px' }, marginBottom: isSmallScreen ? '30px' : '' }}>
                  <img src={img2} width={'100%'} alt="" />
                </Box>
                <Box ref={el => (imgRefs.current[2] = el)} className="img" sx={{ width: { sm: '350px' }, marginBottom: isSmallScreen ? '30px' : '' }}>
                  <img src={img3} width={'100%'} alt="" />
                </Box>
              </Box>
              <Box sx={{ mr: { sm: '30px' } }}>
                <Box ref={el => (imgRefs.current[3] = el)} className="img" sx={{ width: { sm: '350px' }, marginBottom: isSmallScreen ? '30px' : '' }}>
                  <img src={img4} width={'100%'} alt="" />
                </Box>
                <Box ref={el => (imgRefs.current[4] = el)} className="img" sx={{ width: { sm: '350px' }, marginBottom: isSmallScreen ? '30px' : '' }}>
                  <img src={img7} width={'100%'} alt="" />
                </Box>
                <Box ref={el => (imgRefs.current[5] = el)} className="img" sx={{ width: { sm: '350px' }, marginBottom: isSmallScreen ? '30px' : '' }}>
                  <img src={img6} width={'100%'} alt="" />
                </Box>
              </Box>
              <Box>
                <Box ref={el => (imgRefs.current[6] = el)} className="img" sx={{ width: { sm: '350px' }, marginBottom: isSmallScreen ? '30px' : '' }}>
                  <img src={img5} width={'100%'} alt="" />
                </Box>
                <Box ref={el => (imgRefs.current[7] = el)} className="img" sx={{ width: { sm: '350px' }, marginBottom: isSmallScreen ? '30px' : '' }}>
                  <img src={img8} width={'100%'} alt="" />
                </Box>
                <Box ref={el => (imgRefs.current[8] = el)} className="img" sx={{ width: { sm: '350px' }, marginBottom: isSmallScreen ? '30px' : '' }}>
                  <img src={img9} width={'100%'} alt="" />
                </Box>
              </Box>
            </Box>
          </>
         ):(
          <>

            <Box
              sx={{
                display: 'flex',
                padding: { sm: '40px 0px 0px 0px', xs: '5px' },
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: { sm: 'row', xs: 'row' },
              }}
            >
              <Box sx={{ mr: { sm: '30px' } }}>
                <Box  className="img" sx={{ width: { sm: '350px' }, marginBottom: isSmallScreen ? '30px' : '30px' }}>
                  <img src={img1} width={'100%'} alt="" />
                </Box>
                <Box  className="img" sx={{ width: { sm: '350px' }, marginBottom: isSmallScreen ? '30px' : '30px' }}>
                  <img src={img2} width={'100%'} alt="" />
                </Box>
                <Box  className="img" sx={{ width: { sm: '350px' }, marginBottom: isSmallScreen ? '30px' : '30px' }}>
                  <img src={img3} width={'100%'} alt="" />
                </Box>
              </Box>
              <Box sx={{ mr: { sm: '30px' } }}>
                <Box  className="img" sx={{ width: { sm: '350px' }, marginBottom: isSmallScreen ? '30px' : '30px' }}>
                  <img src={img4} width={'100%'} alt="" />
                </Box>
                <Box  className="img" sx={{ width: { sm: '350px' }, marginBottom: isSmallScreen ? '30px' : '30px' }}>
                  <img src={img7} width={'100%'} alt="" />
                </Box>
                <Box  className="img" sx={{ width: { sm: '350px' }, marginBottom: isSmallScreen ? '30px' : '30px' }}>
                  <img src={img6} width={'100%'} alt="" />
                </Box>
              </Box>
              <Box>
                <Box  className="img" sx={{ width: { sm: '350px' }, marginBottom: isSmallScreen ? '30px' : '30px' }}>
                  <img src={img5} width={'100%'} alt="" />
                </Box>
                <Box  className="img" sx={{ width: { sm: '350px' }, marginBottom: isSmallScreen ? '30px' : '30px' }}>
                  <img src={img8} width={'100%'} alt="" />
                </Box>
                <Box  className="img" sx={{ width: { sm: '350px' }, marginBottom: isSmallScreen ? '30px' : '30px' }}>
                  <img src={img9} width={'100%'} alt="" />
                </Box>
              </Box>
            </Box>
            </>
            ) 
          }
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
















