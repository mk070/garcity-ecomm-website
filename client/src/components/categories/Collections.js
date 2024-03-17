import React from 'react'
import {Item, Box, Grid,Typography,useMediaQuery, Card, Container, CardActionArea, CardMedia, CardContent} from "@mui/material"
import tops from "../../assets/images/productpage/1.png"
import blacks from "../../assets/images/productpage/4.png"
import tshirts from "../../assets/images/productpage/3.png"
import colors from "../../assets/images/productpage/2.png"


export const Collections = () => {
  return (
   <>
        <Box>
            <Grid container spacing={3}  sx={{ padding: '0 120px' }}>
            <Grid item xs={3}>
            <Card
              sx={{
                maxWidth: 345,
                borderRadius: "20px",
                position: "relative",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05) rotate(-2deg)",
                  boxShadow: "0px 15px 20px rgba(0, 0, 0, 0.5)",
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={blacks}
                  className="zoom-image"
                />
              </CardActionArea>
              <Typography
                sx={{
                  margin: "13px 0",
                  paddingLeft: "10px",
                  position: "absolute",
                  bottom: "0",
                  width: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  color: "#fff",
                  padding: "8px",
                  borderRadius: "0 0 20px 20px",
                }}
              >
                Black Tshirts
              </Typography>
            </Card>
          </Grid>
    
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
            </Grid>
        </Box>
   </>
  )
}
