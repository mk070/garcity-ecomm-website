import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import gif from '../../assets/gifs/aboutus.webm'
import hero from '../../assets/images/about/dress.avif';

export const Hero = () => {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
        <Box sx={{
        display:'flex',
        flexDirection:isSmallScreen ? 'column': 'row', 
        margin:isSmallScreen ? '0 30px':'0 120px',
        height:{sm:"65vh", xs:''},
        marginTop:isSmallScreen?'100px':'140px'}}>

            <Box sx={{  width:isSmallScreen?'100%':'50%', mb:{xs:'20px'}}}> 
                {/* <video autoPlay style={{ boxShadow:"black 1px 0px 4px 0px",borderRadius:'20px'}} loop width={'100%'} src={gif} alt="" /> */}
                {/* <video autoPlay muted loop width={'100%'} style={{ boxShadow:"black 1px 1px 8px 0px",borderRadius:'20px'}}>
            <source src = {gif} type = "video/webm"/>
          </video> */}
                <img src={hero} alt="" width={'100%'} style={{ boxShadow:"black 1px 1px 8px 0px",borderRadius:'35px'}} srcset="" />
            </Box>

            <Box sx={{
                width:'100%',
                 marginLeft:{sm:'60px'}}}>
                <Typography
                    variant='h3'
                    sx={{
                        fontSize:{xs : '30px',sm:'50px'},
                        fontFamily:"integral-Regular  !important",
                    }}
                >                   
                    ‘ MAKE YOUR OWN <br /> CLOTHING STYLE WITH <span style={{ color: '#DF9573', fontWeight:700, fontFamily:'inherit' }}>  GARCITY ‘</span></Typography>
                    {/* <Typography sx={{marginTop:{sm:'20px' }, paddingRight:{sm:'90px'} ,fontSize:{sm:"24px !important"}, fontWeight:'200px'}}>History:</Typography> */}
                    <Typography sx={{marginTop:{xs:'30px',sm:'20px' }, paddingRight:{sm:'150px'} ,fontSize:{sm:"18px !important"}}}>
                        Founded in 2007, GARCITY began as a small garment manufacturing operation in
                        India. Over the years, we've grown into a leader in the industry, with over 15 years of
                        experience delivering top-quality solutions to clients worldwide. <br /> With a track record of
                        excellence, we've served over 1200 happy clients, delivering top-quality solutions
                        tailored to their needs.
                     </Typography>
            </Box>
        </Box>
    )
}
