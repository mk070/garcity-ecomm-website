import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Container, Grid, IconButton } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Logo from "../../assets/images/logo.png";
import { useNavigate } from 'react-router-dom';

import './login.css';

export const Login = ({ history }) => { // Receive history object as prop
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || 'Login failed');
      }

      const { token } = await response.json();

      localStorage.setItem('token', token);

      // Redirect to dashboard
      navigate('/only-admin/dashboard');
      
    } catch (error) {
      setError(error.message);
    }
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
            onSubmit={handleLogin}
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              required
              id="password"
              type={showPassword ? 'text' : 'password'}
              label="Password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            {error && (
              <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                {error}
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
