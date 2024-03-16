import { Box, Typography } from '@mui/material'
import React from 'react'
import hero from '../../assets/images/about/image.png';

export const Hero = () => {
  return (
        <Box sx={{display:'flex', flexDirection:'row',margin:'0 90px',height:"60vh", marginTop:'150px'}}>
            <Box sx={{ width:'50%'}}> <img width={'100%'} src={hero} alt="" /></Box>
            <Box sx={{width:'50%'}}>
                <Typography
                    variant='h3'
                    sx={{
                        fontSize:{xs : '30px',sm:'50px'},
                        fontFamily: ['integral-Regular', 'sans-serif'].join(','),
                    }}
                >
                    ‘ WE ARE MORE THAN A GARMENT MANUFACTURER ‘</Typography>

                    <Typography>
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style. <br /> <br /> Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    </Typography>
            </Box>
        </Box>
    )
}
