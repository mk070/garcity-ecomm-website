import React from 'react';
import { Typography, useMediaQuery,Box, Container, Grid, Card, CardActionArea, CardMedia } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css/navigation';


export const Clothes = ({ category , images,names}) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Box sx={{padding:{sm:'0 30px'}}}>
      <Typography marginTop="50px" mx={10} variant="h3"
        sx={{
          fontSize: isSmallScreen ? '30px' : '50px',
          
          marginBottom: '30px',
          '& a': {
            color: 'inherit', // Inherit text color
            textDecoration: 'none', // Remove underline
            transition: 'transform 10s ease-in-out',
          },
          '& a:hover': {
            color: '#DF9573',
            transform: 'scale(8)',
            textDecoration: 'underline'
          }
        }}>
        <Link style={{ fontFamily: 'integral-Regular', fontWeight: 'normal', fontSize: '32px', textDecoration: 'none !important' }} to={`/product/${category.toLowerCase().replace(/\s+/g, '')}`}>{category}</Link>
      </Typography>
      <Container maxWidth="xl" sx={{ width: "93%", marginBottom: "80px" }}>
        <Swiper
          mx={10}
          slidesPerView={isSmallScreen ? 1 : 4}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          sx={{ padding: "0 100px" }}
        >
          <Grid container spacing={3} border="1px solid red" sx={{ padding: '0 20px' }}>
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <Grid item xs={3}>
                  <Card sx={{
                    maxWidth: 345,
                    borderRadius: "20px",
                    '&:hover': {
                      boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px"
                    }
                  }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="300"
                        image={image}
                        className="zoom-image"
                      />
                    </CardActionArea>
                  </Card>
                  <Typography sx={{ margin: "13px 0", paddingLeft: "10px" }}>{names[index]}</Typography>
                </Grid>
              </SwiperSlide>
            ))}
          </Grid>
        </Swiper>
      </Container>

      </Box>
  
  );
};

