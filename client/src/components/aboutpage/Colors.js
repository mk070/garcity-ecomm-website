import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import tshirt from '../../assets/images/about/tshirt.svg'; // Change to your SVG t-shirt image

const Colors = () => {
  const [selectedColor, setSelectedColor] = useState('#BA68C8');

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column',sm:'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: { sm: '80px 1px' },
        }}
      >
        <Box>
          <Typography variant="h5" gutterBottom
          sx={{            
            fontFamily: ['integral-Regular', 'sans-serif'].join(','),
        }}
          >
            Choose the colour that sync your style
          </Typography>
          <ColorOptions
            handleColorChange={handleColorChange}
            selectedColor={selectedColor}
          />
          <Typography variant="body1" mt={2}>
          Choose from a wide range of fabric colors customizable with Pantone TPG <br/>and TPX codes, ensuring precise color  matching for your vision.
          </Typography>
        </Box>
        <TShirtImage color={selectedColor} />
      </Box>
    </Container>
  );
};

const ColorOptions = ({ handleColorChange, selectedColor }) => {
  const colors = ['#3F91A6', '#64B5F6', '#3400FF', '#BA68C8', '#FFD54F', '#68916E', '#E6495E', '#9281D4'];

  // Calculate angle for each color button
  const angleIncrement = (2 * Math.PI) / colors.length;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <Box sx={{ position: 'relative', width: '260px', height: '260px' }}>
        {colors.map((color, index) => {
          const angle = angleIncrement * index;
          const radius = 100; // Increased radius to add space between buttons

          const buttonStyle = {
            position: 'absolute',
            top: `calc(50% - ${radius * Math.sin(angle)}px)`,
            left: `calc(50% + ${radius * Math.cos(angle)}px)`,
            backgroundColor: color,
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            cursor: 'pointer',
            border: selectedColor === color ? '3px solid #000' : 'none', // Add border for selected color
            transform: 'translate(-50%, -50%)', // Center the button
            transition: 'transform 0.3s ease-in-out', // Add transition effect
          };

          return (
            <div
              key={index}
              onMouseEnter={() => handleColorChange(color)}
              style={buttonStyle}
            ></div>
          );
        })}
      </Box>
      <Typography variant="body2" mt={2}>
        Selected Color: {selectedColor}
      </Typography>
    </Box>
  );
};

const TShirtImage = ({ color }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#f3cebcd9',
        borderRadius: '30px',
        transition: 'background-color 0.3s ease-in-out', // Add transition effect
        boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.5)', // Move boxShadow to here
      }}
    >
      <svg
        width="360"
        height="360"
        viewBox="0 0 260 260"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Add background rectangle */}
        {/* T-shirt image with color overlay */}
        <image
          xlinkHref={tshirt}
          width="260"
          height="260"
          style={{
            filter: `url(#color-overlay)`,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
        <defs>
          <filter id="color-overlay">
            <feColorMatrix
              type="matrix"
              values={`0 0 0 0 ${hexToRgb(color).r / 255}
                      0 0 0 0 ${hexToRgb(color).g / 255}
                      0 0 0 0 ${hexToRgb(color).b / 255}
                      0 0 0 1 0`}
            />
          </filter>
        </defs>
      </svg>
    </Box>
  );
};

const hexToRgb = (hex) => {
  hex = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => {
    return '#' + r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

export default Colors;
