import React from 'react'
import timing from '../../assets/images/contactus/clock.png'
import contact from '../../assets/images/contactus/contact.png'
import location from '../../assets/images/contactus/location.png'
import { Card, Container, Grid, Typography, useMediaQuery } from '@mui/material'

export const Detials = () => {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <>
    
    <Container maxWidth={"xl"} sx={{
        marginTop:"100px",
      }}>

        <Grid container spacing={3} justifyContent={"space-around"} marginBottom={15}> 
        <Grid item marginBottom={5} sx={{
          position:"relative",
          
        }}>
          <img src={location} style={{
            position:"absolute",    
            height:"100px",
            top:"-30px",
            left:isSmallScreen? "130px":"150px",

          }} />
        <Card sx={{  width:isSmallScreen? "300px":"350px",
                    height:isSmallScreen? "280px":"300px",
                    borderRadius: "20px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    alignItems: "center", // Align items horizontally in the center
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    backgroundColor:"#FFF4F1",
                    
                  }}>
                <Typography fontWeight={900} variant={'h5'}>Location</Typography>
                <Typography
                  marginTop={1}
                  p={3}
                height={100}
                sx={{
                  width: isSmallScreen ? '300px' : '100%',
                  justifyContent:"center",
                  textAlign:"center"
                }}
              >1/354 H Asm garden Ksn puram<br/> 3rd street,semmipalayam palladam,<br/><br/> 
              Tiruppur - 641662 
              </Typography>
                </Card>
        </Grid>
        <Grid item sx={{
          position:"relative",
        }}>
          <img src={contact} style={{
            position:"absolute",    
            height:"70px",
            top:"-10px",
            left:isSmallScreen?"140px":"160px"            
          }} />
        <Card sx={{  width:isSmallScreen? "300px":"350px",
                    height: isSmallScreen?"280px":"300px",
                    borderRadius: "20px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    alignItems: "center", // Align items horizontally in the center
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center", 
                    backgroundColor:"#FFF4F1"

                  }}>
                <Typography fontWeight={900} variant={'h5'}>Contact Us </Typography>
                <Typography
                  marginTop={1}
                  p={3}
                height={100}
                sx={{
                  width: isSmallScreen ? '300px' : '100%',
                  justifyContent:"center",
                  textAlign:"center"
                }}
              ><span>+91 7904545341</span> <br/><br/> remindme.garments@gmail.com
              </Typography>
                </Card>
        </Grid>
        <Grid item sx={{
          position:"relative",
        }}>
          <img src={timing} style={{
            position:"absolute",    
            height:"70px",
            top:"-10px",
            left:"170px"            
          }} />
        <Card sx={{ width:isSmallScreen? "300px":"350px",
                    height: isSmallScreen?"280px":"300px",
                    borderRadius: "20px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    alignItems: "center", 
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    backgroundColor:"#FFF4F1"

                  }}>
                <Typography fontWeight={900} variant={'h5'}>Timings</Typography>
                <Typography
                  marginTop={1}
                  p={2}
                height={100}
                fontWeight={400}
                sx={{
                  width: isSmallScreen ? '300px' : '100%',
                  justifyContent:"center",
                  textAlign:"center"
                }}
              >Monday to Sunday <br/><strong> 9Am to 6Pm</strong> <br/><br/> Sunday:Holiday
              </Typography>
                </Card>
        </Grid>
        </Grid>
      </Container>
    </>
  )
}
