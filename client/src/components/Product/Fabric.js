import React from 'react';
import { Box, Container, useMediaQuery } from '@mui/system';
import { Typography, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import tshirts from '../../assets/images/productpage/3.png';

export const Fabric = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <>
      <Container
        maxWidth={'xl'}
        sx={{
          backgroundColor: '#FFF4F1',
          height: '600px',
          marginTop: '100px',
          display: 'flex',
          flexDirection: isSmallScreen ? 'column' : 'row',
          position: 'relative', // Position relative for the container
        }}
      >
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}

        >
          <Box width={700} sx={{ border: 1 }}>
            <SwiperSlide>
              <Typography
                marginTop={'50px'}
                mx={isSmallScreen ? 2 : 10}
                variant='h3'
                sx={{
                  fontSize: isSmallScreen ? '30px' : '50px',
                  fontFamily: ['integral-Regular', 'sans-serif'].join(','),
                  marginBottom: '50px',
                }}
              >
                Fabric Quality
              </Typography>
              <Typography
                height={100}
                sx={{
                  width: isSmallScreen ? '300px' : '600px',
                  marginLeft: isSmallScreen ? '20px' : '80px',
                  marginBottom: '50px',
                }}
              >
                Clothing of superior quality is constructed mostly of natural fibers such as cotton, linen, wool, or silk. High-quality apparel is long-lasting, comfy, and meticulously constructed like robust zippers, wooden buttons, additional accessories, but also lining, facing, and excellent stitchwork
              </Typography>
            </SwiperSlide>

            <SwiperSlide style={{ display: isSmallScreen ? 'none' : 'block' }}>
              <Typography
                marginTop={'50px'}
                mx={10}
                variant='h3'
                sx={{
                  fontSize: isSmallScreen ? '30px' : '50px',
                  fontFamily: ['integral-Regular', 'sans-serif'].join(','),
                  marginBottom: '50px',
                }}
              >
                Texture
              </Typography>
              <Typography
                sx={{
                  width: isSmallScreen ? '300px' : '600px',
                  marginLeft: isSmallScreen ? '20px' : '80px',
                  marginBottom: '50px',
                }}
              >
                High quality clothes are often made with natural fibers. This is because natural fibers are not only more expensive, but sometimes hold up better over time. Ultimately, the fibers a product is made will tell you a lot about the product itself. High quality clothing is often made of wool, cotton, cashmere, and silk.
              </Typography>
            </SwiperSlide>
          </Box>
        </Swiper>
        <Box
          sx={{
            position: 'absolute',
            bottom: 200,
            left: "-74%",
            right: 0,
            textAlign: 'center',
            marginBottom: '20px', // Adjust margin as needed
          }}
        >
          <Button
            sx={{
              background:'#DF9573',
              mt: isSmallScreen ? '20px' : '0',
              borderRadius:'30px',
              '&:hover': {
                backgroundColor: '#1E1E1E', 
                color:'',// Add hover effect
                transition: 'background-color 0.3s ease-in-out',
              },
              height: '50px',
              width: '200px',
            }} variant="contained"
          >
            Know more 
          </Button>
        </Box>
      
        <Box height={isSmallScreen ? 300 : 600 }
        sx={{
        overflow:"hidden",
        marginRight:"80px",
        width:isSmallScreen ? "100% ":"86%"
       }}>
        <img src={tshirts}/>

       </Box> 
      </Container>
    </>
  );
};
