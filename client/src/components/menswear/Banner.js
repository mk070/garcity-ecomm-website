import React from 'react'
import {Box, Container, Grid} from "@mui/material"

import tshirts from "../../assets/images/mens.png"

export const Banner = () => {
  return (
        <>
           <Box sx={{ height: { sm: '370px' }, padding: { sm: '0 100px' }, mb:{sm:'30px'} }}>
                <img src={tshirts} style={{ width: '100%', height: '100%', borderRadius:'40px', objectFit: 'cover' }} alt="" />
            </Box>

        </>
    )
}
