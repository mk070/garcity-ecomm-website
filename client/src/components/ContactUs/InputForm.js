import React, { useState } from "react";
import styled from "@emotion/styled";
import { Typography, useMediaQuery, Box, TextField ,Button} from "@mui/material";


export const InputForm = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [formData, setFormData] = useState({
    firstName: "vdvd",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = async () => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Email sent successfully');
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };


  return (
    <>
       
        <Box sx={{display:"flex",flexDirection:{sm:"column",xs:'column' },alignItems:"center",height:{sm:"90vh"}, mt:{xs:'40px'}}}>
          <Typography  mx={10} variant='h3'
          sx={{
            fontSize: isSmallScreen ? '24px' : '50px',
            marginBottom: '50px',
            fontWeight:{xs:'600'},
            width:{xs:'224px'}
          }}>Get in touch with us! </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width:{xs:'400px',sm: '700px'},marginLeft:{xs:'2px',sm:'10'}, marginRight:{sm:'10', xs:'30px'}, mb:{xs:'100px'}, padding:{xs:'14px'} }}>

            <TextField id="outlined-basic" label="First Name"  onChange={handleInputChange}  variant="outlined" sx={{
              width: isSmallScreen ? '300px' : '100%',
              marginLeft: isSmallScreen ?'50px' : '',
              

            }} />


            <TextField id="outlined-basic" label="Last Name" onChange={handleInputChange}  variant="outlined" sx={{
              width: isSmallScreen ? '300px' : '100%',
              marginLeft: isSmallScreen ?'50px' : '',

            }} />

            <Box sx={{display:"flex",flexDirection:{sm:"row", xs:'column'}, gap:{sm:'0',xs:'20px'}}}>
            <TextField id="outlined-basic" label="Email Address" onChange={handleInputChange} variant="outlined" sx={{
              width: isSmallScreen ? '300px' : '100%',
              marginLeft: isSmallScreen ?'50px' : '',

            }} />

            <TextField id="outlined-basic" label="Phone number"onChange={handleInputChange} variant="outlined" sx={{
              width: isSmallScreen ? '300px' : '100%',
              marginLeft: isSmallScreen ?'50px' : '20px',

            }} />
            </Box>

            <TextField id="outlined-basic" label="Message"  onChange={handleInputChange} variant="outlined" multiline rows={4} sx={{
              width: isSmallScreen ? '300px' : '100%',
              marginLeft: isSmallScreen ?'50px' : '',

            }} />
            <Button onClick={handleFormSubmit}
              sx={{
              display: { xs: 'block', sm: 'flex' },
              background: '#DF9573',
              mt: { xs: '0px', sm: '30px' },
              borderRadius: '30px',
              ml:{xs:'100px'},
              width:{xs:'200px'}, 
              '&:hover': {
                  backgroundColor: '#1E1E1E',
                  color: '', // Add hover effect
                  transition: 'background-color 0.3s ease-in-out',
              },
              }}
              variant="contained"
            >
              Send  Message
            </Button>
                    

          </Box>
        </Box>
  
    </>

  );
};

export default InputForm;
