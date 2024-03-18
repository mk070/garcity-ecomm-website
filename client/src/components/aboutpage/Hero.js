import { Box, Typography } from '@mui/material'
import React from 'react'
import hero from '../../assets/images/about/dress.png';

export const Hero = () => {
  return (
        <Box sx={{display:'flex', flexDirection:'row',margin:'0 120px',height:"65vh", marginTop:'140px'}}>
            <Box sx={{ width:'32%'}}> <img width={'100%'} src={hero} alt="" /></Box>
            <Box sx={{width:'65%', marginLeft:{sm:'60px'}}}>
                <Typography
                    variant='h3'
                    sx={{
                        fontSize:{xs : '30px',sm:'50px'},
                        fontFamily: ['integral-Regular', 'sans-serif'].join(','),
                    }}
                >
                    ‘ WE ARE MORE THAN  <br /> A <span style={{ color: '#DF9573' }}>GARMENT</span> MANUFACTURER ‘</Typography>

                    <Typography sx={{marginTop:{sm:'20px'}}}>
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style. <br /> <br /> Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    </Typography>
            </Box>
        </Box>
    )
}
