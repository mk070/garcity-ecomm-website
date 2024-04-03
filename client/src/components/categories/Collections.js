import React from 'react';
import { Grid, Typography, Card, CardActionArea, CardMedia } from "@mui/material";

export const Collections = ({ images, names }) => {
  return (
    <Grid container spacing={3} sx={{ padding: '0 120px' }}>
      {images.map((image, index) => (
        <Grid item xs={3} key={index}>
          <Card
            sx={{
              maxWidth: 350,
              borderRadius: "20px",
              position: "relative",
              margin:{sm:"20px 20px"},
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
                image={image}
                alt={`image-${index}`}
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
              {names[index]}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
