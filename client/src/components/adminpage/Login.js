import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Container, Grid, IconButton } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Logo from "../../assets/images/logo.png";
import './login.css';

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Container sx={{height:'100vh'}}>
      <Grid container justifyContent="center" alignItems="center"style={{ height: '100vh' }}>
        <Grid item xs={12} sm={6} md={4} sx={{display:'flex',alignItems:'center',flexDirection: {sm:'column'}}} >
          <Box sx={{ textAlign: 'center',width:{sm:'170px'} }}>
            <img src={Logo} alt="Logo" width={'100%'} />
          </Box>
          <Box sx={{ textAlign: 'center', mt: 4, mb:{sm:4} }}>
            <Typography variant="h5">Sign in to Admin Panel</Typography>
          </Box>
          <Box
            component="form"

            sx={{
              '& .MuiTextField-root': { my: 1, width: '100%' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="username"
              label="Username"
              variant="outlined"
              fullWidth
              placeholder="Enter your username"
            />
            <TextField
              required
              id="password"
              type={showPassword ? 'text' : 'password'}
              label="Password"
              variant="outlined"
              fullWidth
              placeholder="Enter your password"
              InputProps={{
                endAdornment: (
                  <IconButton onClick={handleTogglePassword} edge="end">
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                ),
              }}
            />
            <Button variant="contained" type="submit" fullWidth>
              Log in
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
