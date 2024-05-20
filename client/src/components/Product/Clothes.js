import React from 'react';
import { Typography, useMediaQuery,Box, Container, Grid, Card, CardActionArea, CardMedia } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'swiper/css/navigation';
import '../../App.css'


export const Clothes = ({ category, images, names }) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Box sx={{ padding: { sm: '0 30px' } }}>
      <Typography
        variant="h3"
        sx={{
          fontSize: isSmallScreen ? '24px' : '50px',
          m: { sm: '50px 0', xs: '40px 0 20px 0' },
          display: "flex",
          justifyContent: 'center',
          '& a': {
            color: '#DF9573', // Inherit text color
            textDecoration: 'none', // Remove underline
            transition: 'transform 10s ease-in-out',
            textDecoration: 'underline'
          },
          '& a:hover': {
            color: 'black',
            transform: 'scale(1)',
            textDecoration: 'underline'
          }
        }}
      >
        <Link style={{ fontFamily: 'integral-Regular', fontWeight: 'normal', fontSize: { sm: '32px', xs: "24px" }, textDecoration: 'none !important' }} to={`/product/${category.toLowerCase().replace(/\s+/g, '')}`}>{category}</Link>
      </Typography>
      <Container maxWidth="xl" sx={{ width: "86%", marginBottom: { sm: "0px", xs: '10px' } }}>
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
                      <a href={`/product/${category.toLowerCase().replace(/\s+/g, '')}`}>
                        <LazyLoadImage
                          src={image}
                          effect="blur"
                          height={300}
                          className="zoom-image"
                        />
                      </a>
                    </CardActionArea>
                  </Card>
                  <Typography sx={{ margin: "13px 0", paddingLeft: "10px" }}>{names[index]}</Typography>
                </Grid>
              </SwiperSlide>
            ))}
          </Grid>
        </Swiper>
      </Container>
      <Typography variant="h3"
        sx={{
          fontSize: isSmallScreen ? '22px' : '32px',
          m: { sm: '10px 0 80px 0', xs: "0px 0 30px 0" },
          display: "flex",
          justifyContent: 'center',
          '& a': {
            color: 'black', // Inherit text color
            textDecoration: 'none', // Remove underline
            transition: 'transform 10s ease-in-out',
          },
          '& a:hover': {
            color: '#DF9573',
            transform: 'scale(1)',
          }
        }}>
        <Link style={{ fontWeight: 'normal', fontSize: { sm: '16px', xs: "14px" }, textDecoration: 'none !important' }} to={`/product/${category.toLowerCase().replace(/\s+/g, '')}`}>For more..</Link>
      </Typography>
    </Box>
  );
};


