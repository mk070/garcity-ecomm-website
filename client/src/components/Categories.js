<<<<<<< HEAD
import React, { useState } from 'react';
import { Box, Container, Stack, Paper, Typography } from '@mui/material';
import woman1 from '../assets/images/Categories/woman1.png';
import woman2 from '../assets/images/Categories/women2.png';
import men1 from '../assets/images/Categories/men1.png';
import men2 from '../assets/images/Categories/men2.png';
import kid1 from '../assets/images/Categories/kid1.png';
import kid2 from '../assets/images/Categories/kid2.png';
=======
import React from 'react'
import {Box,Typography,Stack} from '@mui/material'
>>>>>>> b6bef86e4af0f813846360667f9606f203c73eba

export const Categories = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (image) => {
     let categories = image.toLowerCase();
     setHoveredImage(categories);
    console.log(categories)
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const categories = [
    { name: "Women's wear", image1: woman1, image2: woman2 },
    { name: "Men's wear", image1: men1, image2: men2 },
    { name: "Kid's wear", image1: kid1, image2: kid2 }
  ];

  return (
<<<<<<< HEAD
    <>
      <Typography sx={{ display: 'block', paddingLeft: '24px', fontSize: '24px', textAlign: 'center', mt: '70px' }}>Categories</Typography>
      <Container sx={{ display: 'flex', height: '50vh', mt: '00px', flexDirection: {md:'row',lg:'row',xs:'column',sm:'row'}, alignItems: 'center', paddingLeft: '1px', justifyContent: 'space-around' }}>
      <Box>
      <Box sx={{ width: '250px', display:{xs:'none', sm:'flex',lg:'flex'} }}> 
          {hoveredImage === "women's wear" ? (
            <img style={{ width: '100%' }} src={woman1} alt="" />
          ) : (
            hoveredImage === "men's wear" ? (
              <img style={{ width: '100%' }} src={men1} alt="" />
            ) : (
              hoveredImage === "kid's wear" ? (
                <img style={{ width: '100%' }} src={kid1} alt="" />
              ) : (
                <img style={{ width: '100%' }} src={kid1} alt="" />
              )
            )
          )}
        </Box>
      </Box>

        <Box>
          <Stack mb={'0px'} direction={{ xs: 'row', sm: 'column' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
            {categories.map((category, index) => (
              <Paper
                key={index}
                onMouseEnter={() => handleMouseEnter(category.name )}
                onMouseLeave={handleMouseLeave}
                sx={{ padding: '10px', textAlign: 'center', cursor: 'pointer' }}
              >
                {category.name}
              </Paper>
            ))}
          </Stack>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-around' }} >
          <Box sx={{ width: '220px' }}>
          {hoveredImage === "women's wear" ? (
            <img style={{ width: '100%' }} src={woman2} alt="" />
          ) : (
            hoveredImage === "men's wear" ? (
              <img style={{ width: '100%' }} src={men2} alt="" />
            ) : (
              hoveredImage === "kid's wear" ? (
                <img style={{ width: '100%' }} src={kid2} alt="" />
              ) : (
                <img style={{ width: '100%' }} src={kid1} alt="" />
              )
            )
          )}
            </Box>
        </Box>
      </Container>
    </>
  );
};
=======
    <Box sx={{
      display:'flex',
      justifyContent:'center',
      mt:{sm:'10px', lg:'20px', xs:'30px'},  // lg - desktop , xs - phone , sm -tablet

    }}>
      <Typography>
          Categories
      </Typography>
      <Stack>
        
      </Stack>
    </Box>
  )
}
>>>>>>> b6bef86e4af0f813846360667f9606f203c73eba
