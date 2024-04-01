import React from 'react'
import {Item, Box, Grid,Typography,useMediaQuery, Card, Container, CardActionArea, CardMedia, CardContent} from "@mui/material";
import tops from "../../assets/images/productpage/1.png";
import blacks from "../../assets/images/productpage/4.png";
import tshirts from "../../assets/images/productpage/3.png";
import colors from "../../assets/images/productpage/2.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css/navigation';
// import '../App.css'


export const Clothes = ({categorie}) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return(
      <> 
        <Typography marginTop={"50px"} mx={10} variant='h3'
          sx={{
            fontSize: isSmallScreen ? '30px' : '50px',
            fontFamily: ['integral-Regular', 'sans-serif'].join(','),
            marginBottom: '50px',
            '& a': {
              color: 'inherit', // Inherit text color
              textDecoration: 'none', // Remove underline
              transition: 'transform 10s ease-in-out',
            },
            '& a:hover':{
              color:"#DF9573", 
              transform: 'scale(8)',
              textDecoration:'underline'
            }

          }}> <Link  to={`/product/${categorie.toLowerCase().replace(/\s+/g, '')}`}>{categorie}</Link> </Typography>
      <Container  maxWidth={"xl"} sx={{
        width:"93%",
        marginBottom:"80px"
      }}>
        <Swiper
          mx={10}
          slidesPerView={isSmallScreen ? 1 : 4}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className ="mySwiper"
          sx={{
            padding:"0 100px"
          }}
        >
          <Grid container spacing={3} border={"1px solid red"} sx={{ padding: '0 20px' }}>
            <SwiperSlide>
              <Grid item xs={3}>
                <Card sx={{ maxWidth: 345,
                        borderRadius:"20px",
                        '&:hover':{
                          boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"
                        }
                        }}>
                  <CardActionArea >
                    <CardMedia
                      component="img"
                      height="300"
                      image={blacks}
                      className="zoom-image"
                     
                    />
                  </CardActionArea>
                </Card>
                <Typography sx={{
                  margin:"13px 0",
                  paddingLeft:"10px"
                }}>Black Tshirts</Typography>
              </Grid>
            </SwiperSlide>
  
            <SwiperSlide>
              <Grid item xs={3}>
                <Card sx={{ maxWidth: 345,
                        borderRadius:"20px",
                        '&:hover':{
                          boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"
                        }
                      }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image={tshirts}
                      className="zoom-image"
                    />
                  </CardActionArea>
                </Card>
                <Typography sx={{
                  margin:"13px 0",
                  paddingLeft:"10px"
                }}>Black Tshirts</Typography>
              </Grid>
            </SwiperSlide>
  
            <SwiperSlide>
              <Grid item xs={3}>
                <Card sx={{ maxWidth: 345,
                        borderRadius:"20px",
                        '&:hover':{
                          boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"
                        }
                      }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image={tops}
                      className="zoom-image"
                    />
                  </CardActionArea>
                </Card>
                <Typography sx={{
                  margin:"13px 0",
                  paddingLeft:"10px"
                }}>Black Tshirts</Typography>
              </Grid>
            </SwiperSlide>
  
            <SwiperSlide>
              <Grid item xs={3}>
                <Card sx={{ maxWidth: 345,
                        borderRadius:"20px",
                        '&:hover':{
                          boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"
                        }
                      }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image={colors}
                      className="zoom-image"
                    />
                  </CardActionArea>
                </Card>
                <Typography sx={{
                  margin:"13px 0",
                  paddingLeft:"10px"
                }}>Black Tshirts</Typography>
              </Grid>
            </SwiperSlide>
  
            <SwiperSlide>
              <Grid item xs={3}>
                <Card sx={{ maxWidth: 345,
                        borderRadius:"20px",
                        '&:hover':{
                          boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"
                        }
                      }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image={tops}
                      alt="green iguana"
                      className='zoom-image'
                    />
                  </CardActionArea>
                </Card>
                <Typography sx={{
                  margin:"13px 0",
                  paddingLeft:"10px"
                }}>Black Tshirts</Typography>
              </Grid>
            </SwiperSlide>
          </Grid>
        
        </Swiper>
        </Container>
      </>
    
  )
}
