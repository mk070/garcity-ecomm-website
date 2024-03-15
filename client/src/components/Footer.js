import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import MuiLink from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import logo from '../assets/images/logo2.png';
import { Link } from 'react-router-dom';

const FooterContainer = styled(Box)({
  backgroundColor: '#372B29',
  height: '55vh',
  width: '100%',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px'
});

const FooterSection = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  marginRight: '20px',
  marginTop:'30px'
});

const FooterLink = styled(Link)({
  color: 'white',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline'
  }
});

const CopyrightLink = styled(MuiLink)({
  color: 'white',
  textDecoration: 'none',
  marginTop: '20px',
  '&:hover': {
    textDecoration: 'underline'
  }
});

export const Footer = () => {
  return (
    <FooterContainer>
      <Grid container spacing={2}> {/* Reduced spacing from 3 to 2 */}
        <Grid item xs={12} sm={4} md={3}sx={{marginLeft:'50px'}}>
          <Box>
            <img src={logo} width={'30%'} alt="" srcset="" />
            <Typography variant='body1' mt={'20px'}>Garcity, is more than just a garment manufacturer – we are the architects of your unique style.</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{marginLeft:'160px'}}>
          <FooterSection>
            <Typography variant='h5' marginBottom={'30px'}>Social</Typography>
            <Typography variant='body1'  marginBottom={'14px'}><FooterLink to="#">Facebook</FooterLink></Typography>
            <Typography variant='body1' marginBottom={'14px'}><FooterLink to="#">Instagram</FooterLink></Typography>
            <Typography variant='body1' marginBottom={'14px'}><FooterLink to="#">Whatsapp</FooterLink></Typography>
            <Typography variant='body1' ><FooterLink to="#">Youtube</FooterLink></Typography>
          </FooterSection>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{marginLeft:'-110px'}}>
          <FooterSection>
            <Typography variant='h5' marginBottom={'30px'}>Info</Typography>
            <Typography variant='body1'marginBottom={'14px'}><FooterLink to="#">Home</FooterLink></Typography>
            <Typography variant='body1'marginBottom={'14px'}><FooterLink to="#">Products</FooterLink></Typography>
            <Typography variant='body1'marginBottom={'14px'}><FooterLink to="#">Gallery</FooterLink></Typography>
            <Typography variant='body1'marginBottom={'14px'}><FooterLink to="#">About us</FooterLink></Typography>
            <Typography variant='body1'><FooterLink to="#">Contact Us</FooterLink></Typography>
          </FooterSection>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{marginLeft:'-110px'}}>
          <FooterSection>
            <Typography variant='h5' marginBottom={'30px'}>Contact</Typography>
            <Typography variant='body1'>1/354 H Asm garden Ksn puram 3rd street semmipalayam palladam, Tiruppur - 641662</Typography>
          </FooterSection>
        </Grid>
      </Grid>
      <Typography marginTop={'90px'} variant="body2" color="white" align="center">
        {'Copyright © '}
        <CopyrightLink href="https://mui.com/">
          Garcity
        </CopyrightLink>{' '}
        {new Date().getFullYear()}.
      </Typography>
    </FooterContainer>
  )
}
