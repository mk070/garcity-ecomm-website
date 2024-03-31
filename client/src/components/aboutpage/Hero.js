import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import hero from '../../assets/images/about/dress.png';

export const Hero = () => {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
        <Box sx={{display:'flex', flexDirection:isSmallScreen ? 'column': 'row',margin:isSmallScreen ? '0 30px':'0 120px',height:"65vh", marginTop:'140px'}}>
            <Box sx={{ width:isSmallScreen?  '70%':'32%'}}> <img width={'100%'} src={hero} alt="" /></Box>
            <Box sx={{width:'65%', marginLeft:{sm:'60px'}}}>
                <Typography
                    variant='h3'
                    sx={{
                        fontSize:{xs : '30px',sm:'50px'},
                         fontFamily:"integral-Regular  !important",
                    }}
                >                   
                    ‘ MAKE YOUR OWN<br/> CLOTHING STYLE<br/> WITH<span style={{ color: '#DF9573', fontWeight:700, fontFamily:'inherit' }}>  GARCITY ‘</span></Typography>

                    <Typography sx={{marginTop:{sm:'20px' , fontSize:{sm:"18px !important"}}}}>
                    We're a leading garment manufacturer in Tirupur, boasting over <strong>15+
                    years</strong> of experience.Crafting quality clothing for men, women, kids, infants, and babies is our specialty.<br/>We're committed to embracing future technologies to deliver the best to our clients.<br/><br/>Our focus is on providing competitive pricing without sacrificing quality.<br/>Choose us for fashion-forward, durable, and affordable clothing solutions.
                    </Typography>
            </Box>
        </Box>
    )
}
