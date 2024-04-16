import React, { useState } from "react";
import { Typography, useMediaQuery, Box, TextField, Button, Snackbar, CircularProgress } from "@mui/material";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const InputForm = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [sending, setSending] = useState(false); // New state for tracking sending status

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName = "First Name is required";
    }
    if (!formData.lastName.trim()) {
      errors.lastName = "Last Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Invalid phone number";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = async () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      try {
        setSending(true); // Start sending process
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          setSnackbarOpen(true); // Show success message
          setFormData({ // Clear form after successful submission
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            message: ""
          });
        } else {
          console.error('Failed to send email');
        }
      } catch (error) {
        console.error('Error sending email:', error);
      } finally {
        setSending(false); // Finish sending process
      }
    } else {
      setErrors(formErrors);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh',minWidth: '100%' }}>
      <Box sx={{width:'100%',padding:{sm:"0 260px",xs:'0 30px' }}}>
        <Typography variant='h3' sx={{fontSize:{sm:"42px",xs:"24px"}, marginBottom: '20px' }}>Get in touch with us! </Typography>
        <Box>
          <Box sx={{display:"flex",flexDirection:{sm:"row",xs:'column'},gap:{sm:'10px',xs:"7px"},fontSize:{sm:'2px'}}}>
            <TextField
              id="firstName"
              name="firstName"
              label="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              variant="outlined"
              error={!!errors.firstName}
              helperText={errors.firstName}
              sx={{ marginBottom: '20px', width: '100%' }}
            />
            <TextField
              id="lastName"
              name="lastName"
              label="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              variant="outlined"
              error={!!errors.lastName}
              helperText={errors.lastName}
              sx={{ marginBottom: '20px', width: '100%' }}
            />
          </Box>
          
          <TextField
            id="email"
            name="email"
            label="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email}
            sx={{ marginBottom: '20px', width: '100%' }}
          />
          <TextField
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            variant="outlined"
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber}
            sx={{ marginBottom: '20px', width: '100%' }}
          />
          <TextField
            id="message"
            name="message"
            label="Message"
            value={formData.message}
            onChange={handleInputChange}
            variant="outlined"
            multiline
            rows={4}
            error={!!errors.message}
            helperText={errors.message}
            sx={{ marginBottom: '20px', width: '100%' }}
          />
          <Button
            onClick={handleFormSubmit}
            variant="contained"
            disabled={sending} // Disable button during sending process
            sx={{ backgroundColor: '#DF9573', color: '#fff', '&:hover': { backgroundColor: '#1E1E1E' } }}
          >
            {sending ? <CircularProgress size={24} /> : 'Send Message'} {/* Show loading spinner during sending process */}
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        message="Message Sent Successfully"
        ContentProps={{
          sx: {
            backgroundColor: '#FFF4F1',
            color: '#372B29',
            fontFamily: 'satoshi',
            fontWeight: 'bold',
            borderRadius: '10px',
            animation: `${fadeIn} 0.5s ease`,
            textAlign: 'center',
            minWidth: '200px',
            maxWidth: '80%',
            marginBottom: isSmallScreen ? '60px' : '20px',
          }
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </Box>
  );
};

export default InputForm;
