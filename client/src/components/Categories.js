import React from 'react'
import {Box,Typography,Stack} from '@mui/material'

export const Categories = () => {
  return (
    <Box sx={{
      display:'flex',
      justifyContent:'center',
      mt:{sm:'10px', lg:'20px', xs:'30px'},  // lg - desktop , xs - phone , sm -tablet

    }}>
      <Typography>
          Categories
      </Typography>
      <Stack>
        
      </Stack>
    </Box>
  )
}
