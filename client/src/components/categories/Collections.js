import React from 'react';
import { Grid, Typography, Card, CardActionArea, CardMedia } from "@mui/material";

export const Collections = ({ images, names }) => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      sx={{
        padding: { sm: '0 120px', xs: '0 20px' },
        marginTop: { xs: '50px' },
        marginBottom: '100px'
      }}
    >
      {images.map((image, index) => (
        <Grid item xs={6} sm={3} key={index}>
          <Card
            sx={{
              maxWidth: 350,
              borderRadius: '20px',
              position: 'relative',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.05) rotate(-2deg)',
                boxShadow: '0px 15px 20px rgba(0, 0, 0, 0.5)'
              }
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                sx={{height:{sm:'300px',xs:'200px'}}}
                image={image}
                alt={`image-${index}`}
                className="zoom-image"
              />
            </CardActionArea>
            <Typography
              variant="body1"
              align="center"
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: '#fff',
                padding: '8px',
                fontSize:{sm:'16px',xs:"14px"},
                borderRadius: '0 0 20px 20px'
              }}
            >
              {names[index]}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
