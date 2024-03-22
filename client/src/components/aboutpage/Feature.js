import { Container,Box ,Typography } from '@mui/material'
import React from 'react'

export const Feature = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, padding: { xs: '90px 0', sm: '90px 130px' }, background: 'linear-gradient(to top, #FFF4F1, #fff)' }}>
      <Box sx={{marginRight: {sm: '80px'}, width: { xs: '100%', sm: '30%' }}}>
        <Typography variant='h3'>01.</Typography>
        <Typography variant='h5' sx={{marginTop:{sm:'30px'}}}>Customized</Typography>
        <Typography variant='body1' sx={{marginTop:{sm:'30px'}}}>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style. Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</Typography>
      </Box>
      <Box sx={{marginRight: {sm: '80px'}, width: { xs: '100%', sm: '30%' }}}>
        <Typography variant='h3' >01.</Typography>
        <Typography variant='h5'  sx={{marginTop:{sm:'30px'}}}>Customized</Typography>
        <Typography  sx={{marginTop:{sm:'30px'}}}>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style. Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</Typography>
      </Box>
      <Box sx={{ width: { xs: '100%', sm: '30%' }}}>
        <Typography variant='h3'>01.</Typography>
        <Typography variant='h5'  sx={{marginTop:{sm:'30px'}}}>Customized</Typography>
        <Typography  sx={{marginTop:{sm:'30px'}}}>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style. Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</Typography>
      </Box>
    </Box>
  )
}