import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import img from "../assets/images/404-error.gif"

export const NotFound = () => {
  return (
    <>
        <Box sx={{width:{sm:"100wh"}, height:{sm:'90vh'}, display:'flex',flexDirection:{sm:'column'} ,justifyContent:"center" , alignItems:'center'}}> 
            <img src={img} alt="" srcset="" />
            {/* <Typography fontFamily={"integral-Regular  !important"} sx={{fontSize:{sm:"48px"}}}>404</Typography>
            <Typography fontFamily={"integral-Regular  !important"} sx={{mb:{sm:"40px"}, fontSize:{sm:"48px"}}}>Page not found</Typography> */}
            <Button sx={{fontSize:{sm:"22px"}}} onClick={()=>window.history.back()}><ArrowBackIcon />Go back</Button>
        </Box>
    </>

    )
}
