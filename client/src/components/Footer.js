import React from 'react';
import { useMediaQuery,Typography, Box, Grid, Link } from '@mui/material';
import logo from '../assets/images/logo2.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
const Footer = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Box sx={{ backgroundColor: '#372B29', color: 'white', padding: '20px',width:{xs:'100%'} , height:{sm:'65vh'}}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3} sx={{ textAlign: 'center' }}>
          <Box>
            <img src={logo} width={isSmallScreen? '30%' :'40%'} alt="" />
            <Typography variant='body1' sx={{fontSize:{xs:'14px',sm:'16px'}, textAlign:{sm:'start'},paddingLeft:{sm:'20px'}}} mt={2}>Garcity, is more than just a garment manufacturer – we are the architects of your unique style.</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} md={3} sx={{ textAlign: 'center', mt: { sm: '40px',xs:'20px' } }}>
          <Box sx={{ paddingLeft: { sm: '130px',xs:'30px' }, marginBottom: '20px', textAlign: 'start' }}>
            <Typography variant='h5' sx={{ fontSize: { xs: '18px', sm: '26px' } }} mb={2}>Social</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center',mb:{sm:'20px',xs:'8px'}}}>
              <FacebookIcon sx={{ mr: 1 ,width:{xs:'20px'} }} />
              <Link href="http://facebook.com/Garcitystyle" sx={{ color: 'white', textDecoration: 'none',fontSize:{sm:"16px",xs:'14px'} , '&:hover': { textDecoration: 'underline' } }}>Facebook</Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' ,mb:{sm:'20px',xs:'8px'}}}>
              <InstagramIcon sx={{ mr: 1,width:{xs:"20px"} }} />
              <Link href="http://instagram.com/garcitystyle" sx={{ color: 'white', textDecoration: 'none',fontSize:{sm:"16px",xs:'14px'} ,'&:hover': { textDecoration: 'underline' } }}>Instagram</Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' ,mb:{sm:'20px',xs:'8px'}}}>
              <LinkedInIcon sx={{ mr: 1,width:{xs:'20px'} }} />
              <Link href="http://linkedin.com/company/garcity" sx={{ color: 'white', textDecoration: 'none', fontSize:{sm:"16px",xs:'14px'} ,'&:hover': { textDecoration: 'underline' } }}>LinkedIn</Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center',mb:{sm:'20px',xs:'8px'} }}>
              <YouTubeIcon sx={{ mr: 1 ,width:{xs:'20px'}}} />
              <Link href="http://youtube.com/@Garcitystyle" sx={{ color: 'white', textDecoration: 'none',fontSize:{sm:"16px",xs:'14px'} , '&:hover': { textDecoration: 'underline' } }}>YouTube</Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center',mb:{sm:'20px',xs:'8px'} }}>
              <PinterestIcon sx={{ mr: 1 ,width:{xs:'20px'}}} />
              <Link href="http://in.pinterest.com/garcitystyle" sx={{ color: 'white', textDecoration: 'none',fontSize:{sm:"16px",xs:'14px'} , '&:hover': { textDecoration: 'underline' } }}>Pinterest</Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' ,mb:{sm:'20px',xs:'8px'}}}>
              <XIcon sx={{ mr: 1 ,width:{xs:'20px'}}} />
              <Link href="https://twitter.com/Garcitystyle" sx={{ color: 'white', textDecoration: 'none',fontSize:{sm:"16px",xs:'14px'} , '&:hover': { textDecoration: 'underline' } }}>X</Link>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6} sm={6} md={3} sx={{ textAlign: 'center' , mt:{sm:'40px',xs:'20px'}}}>
          <Box sx={{  paddingLeft:{sm:'60px',xs:"30px"},marginBottom: '20px' , textAlign:'start'}}>
            <Typography variant='h5' sx={{fontSize:{xs:'18px',sm:'26px'}}} mb={2}>Info</Typography>
            <Typography variant='body1' sx={{fontSize:{xs:'14px',sm:'16px'}}} mb={1}><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Home</Link></Typography>
            <Typography variant='body1' sx={{fontSize:{xs:'14px',sm:'16px'}}} mb={1}><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Product</Link></Typography>
            <Typography variant='body1' sx={{fontSize:{xs:'14px',sm:'16px'}}} mb={1}><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Gallery</Link></Typography>
            <Typography variant='body1' sx={{fontSize:{xs:'14px',sm:'16px'}}} mb={1}><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>About us</Link></Typography>
            <Typography variant='body1' sx={{fontSize:{xs:'14px',sm:'16px'}}} ><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Contact us</Link></Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' , mt:{sm:'40px'}}}>
          <Box textAlign={'start'} sx={{paddingRight:{sm:'30px'}}}>
            <Typography variant='h5' sx={{fontSize:{xs:'18px',sm:'26px'}}} mb={2}>Contact</Typography>
            <Typography variant='body1' sx={{fontSize:{xs:'14px',sm:'16px'}}}>1/354 H Asm garden Ksn puram 3rd street semmipalayam palladam, Tiruppur - 641662</Typography>
            <Typography variant='body1' sx={{fontSize:{xs:'14px',sm:'16px'}, mt:{sm:'20px'}}}>Phone :  +91 9363091528</Typography>
            <Typography variant='body1' sx={{fontSize:{xs:'14px',sm:'16px'}, mt:{sm:'20px'}}}>Mail :  garcitystyle@gmail.com</Typography>
          </Box>
        </Grid>
        {/* Other Grid items follow similar pattern */}
      </Grid>
      <Typography sx={{fontSize:{xs:'14px',sm:'16px'},mt:{sm:'100px', xs:'80px'}}} variant="body2" align="center">
        {'Copyright © '}
        Garcity {new Date().getFullYear()}.
      </Typography>
      <Typography sx={{fontSize:{xs:'14px',sm:'16px'},margin:{sm:'10px 0', xs:'10px 0'}}} variant="body2" align="center">
        Crafted by - Varloom
      </Typography>
    </Box>
  )
}

export default Footer;
