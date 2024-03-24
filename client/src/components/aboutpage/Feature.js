import { Container,Box ,Typography } from '@mui/material'
import React from 'react'

export const Feature = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, padding: { xs: '90px 0', sm: '90px 130px' }, background: 'linear-gradient(to top, #FFF4F1, #fff)' }}>
      <Box sx={{marginRight: {sm: '80px'}, width: { xs: '100%', sm: '30%' }}}>
        <Typography variant='h3'>01.</Typography>
        <Typography variant='h5' sx={{marginTop:{sm:'30px'}}}>Customization Excellence:</Typography>
        <Typography variant='body1' sx={{marginTop:{sm:'30px'}}}>We offer top-notch
customization options,
empowering you to
personalize garments to
perfection with color, design,
and style choices.
</Typography>
      </Box>
      <Box sx={{marginRight: {sm: '80px'}, width: { xs: '100%', sm: '30%' }}}>
        <Typography variant='h3' >02.</Typography>
        <Typography variant='h5'  sx={{marginTop:{sm:'30px'}}}>Printing Services:</Typography>
        <Typography  sx={{marginTop:{sm:'30px'}}}>Experience professional
printing for your custom
designs, logos, or messages,
delivering high-quality results
that align with your visio</Typography>
      </Box>
      <Box sx={{ width: { xs: '100%', sm: '30%' }}}>
        <Typography variant='h3'>03.</Typography>
        <Typography variant='h5'  sx={{marginTop:{sm:'30px'}}}>Fabrication Excellence:</Typography>
        <Typography  sx={{marginTop:{sm:'30px'}}}>We excel in fabrication,
crafting top-notch fabrics
like organic cotton, Supima,
100% cotton, polyester, and
cotton-poly blends. Your
satisfaction is our priority.
</Typography>
      </Box>
    </Box>
  )
}