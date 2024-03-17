import React from 'react';
import { useMediaQuery,Typography, Box, Grid, Link } from '@mui/material';
import logo from '../assets/images/logo2.png';


const Footer = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Box sx={{ backgroundColor: '#372B29', color: 'white', padding: '20px',width:{xs:'100%'} , height:{sm:'60vh'}}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3} sx={{ textAlign: 'center' }}>
          <Box>
            <img src={logo} width={isSmallScreen? '30%' :'40%'} alt="" />
            <Typography variant='body1' sx={{fontSize:{xs:'12px',sm:'16px'}, textAlign:{sm:'start'},paddingLeft:{sm:'80px'}}} mt={2}>Garcity, is more than just a garment manufacturer – we are the architects of your unique style.</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} md={3} sx={{ textAlign: 'center', mt:{sm:'40px'}}}>
          <Box sx={{ paddingLeft:{sm:'130px'},marginBottom: '20px' ,textAlign:'start'}}>
            <Typography variant='h5' sx={{fontSize:{xs:'18px',sm:'26px'}}} mb={2}>Social</Typography>
            <Typography variant='body1' sx={{fontSize:{xs:'12px',sm:'16px'}}} mb={1}><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Facebook</Link></Typography>
            <Typography variant='body1' sx={{fontSize:{xs:'12px',sm:'16px'}}} mb={1}><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Instagram</Link></Typography>
            <Typography variant='body1' sx={{fontSize:{xs:'12px',sm:'16px'}}} mb={1}><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Whatsapp</Link></Typography>
            <Typography variant='body1' sx={{fontSize:{xs:'12px',sm:'16px'}}}><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Youtube</Link></Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} md={3} sx={{ textAlign: 'center' , mt:{sm:'40px'}}}>
          <Box sx={{  paddingLeft:{sm:'60px'},marginBottom: '20px' , textAlign:'start'}}>
            <Typography variant='h5' sx={{fontSize:{xs:'18px',sm:'26px'}}} mb={2}>Info</Typography>
            <Typography variant='body1' sx={{fontSize:{xs:'12px',sm:'16px'}}} mb={1}><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Home</Link></Typography>
            <Typography variant='body1' sx={{fontSize:{xs:'12px',sm:'16px'}}} mb={1}><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Product</Link></Typography>
            <Typography variant='body1' sx={{fontSize:{xs:'12px',sm:'16px'}}} mb={1}><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Gallery</Link></Typography>
            <Typography variant='body1' sx={{fontSize:{xs:'12px',sm:'16px'}}} mb={1}><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>About us</Link></Typography>
            <Typography variant='body1' sx={{fontSize:{xs:'12px',sm:'16px'}}} ><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Contact us</Link></Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' , mt:{sm:'40px'}}}>
          <Box textAlign={'start'} sx={{paddingRight:{sm:'30px'}}}>
            <Typography variant='h5' sx={{fontSize:{xs:'18px',sm:'26px'}}} mb={2}>Contact</Typography>
            <Typography variant='body1' sx={{fontSize:{xs:'12px',sm:'16px'}}}>1/354 H Asm garden Ksn puram 3rd street semmipalayam palladam, Tiruppur - 641662</Typography>
            <Typography variant='body1' sx={{fontSize:{xs:'12px',sm:'16px'}, mt:{sm:'20px'}}}>Phone : 9038493274</Typography>
            <Typography variant='body1' sx={{fontSize:{xs:'12px',sm:'16px'}, mt:{sm:'20px'}}}>Mail : test@gamil.com</Typography>
          </Box>
        </Grid>
        {/* Other Grid items follow similar pattern */}
      </Grid>
      <Typography sx={{fontSize:{xs:'12px',sm:'16px'},mt:{sm:'100px', xs:'80px'}}} variant="body2" align="center">
        {'Copyright © '}
        Garcity {new Date().getFullYear()}.
      </Typography>
      <Typography sx={{fontSize:{xs:'12px',sm:'16px'},mt:{sm:'10px', xs:'10px'}}} variant="body2" align="center">
        Crafted by - Varloom
      </Typography>
    </Box>
  )
}

export default Footer;
