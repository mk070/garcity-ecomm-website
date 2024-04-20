import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import hero from '../../assets/images/about/dress.png';

export const Hero = () => {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
        <Box sx={{
        display:'flex',
        flexDirection:isSmallScreen ? 'column': 'row', 
        margin:isSmallScreen ? '0 30px':'0 120px',
        height:{sm:"65vh", xs:'93vh'},
        marginTop:isSmallScreen?'100px':'140px'}}>

            <Box sx={{  width:isSmallScreen?'80%':'40%', mb:{xs:'20px'}}}> 
                <img width={'100%'} src={hero} alt="" />
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
                    ‘ MAKE YOUR OWN CLOTHING STYLE WITH <span style={{ color: '#DF9573', fontWeight:700, fontFamily:'inherit' }}>  GARCITY ‘</span></Typography>
                    {/* <Typography sx={{marginTop:{sm:'20px' }, paddingRight:{sm:'90px'} ,fontSize:{sm:"24px !important"}, fontWeight:'200px'}}>History:</Typography> */}
                    <Typography sx={{marginTop:{xs:'30px',sm:'20px' }, paddingRight:{sm:'90px'} ,fontSize:{sm:"18px !important"}}}>
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
