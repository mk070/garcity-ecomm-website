import { Box ,Typography,Stepper, useMediaQuery} from '@mui/material'
import React from 'react'

export const Requirements = () => {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
        <>
            <Box sx={{padding:{sm:" 20px 130px"}, display:'flex',flexDirection:{sm:'row'}}}>
                <Box>
                    <img src="" alt="" srcset="" />
                </Box>
                <Box>
                <Typography marginTop={"40px"} mx={3} variant='h3'
          sx={{
            fontSize: isSmallScreen ? '30px' : '50px',
            fontFamily: ['integral-Regular', 'sans-serif'].join(','),
            marginBottom: '50px',
          }}>Place your order</Typography>
                </Box>
            </Box>
        </>
    )
}
