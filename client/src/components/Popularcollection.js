import { Box , Typography,Button} from '@mui/material'
import React from 'react'
import { Slidercom } from './Slider'

export const Popularcollection = () => {
  return (
      <Box sx={{display:'flex', justifyContent:'center', flexDirection:'column', bgcolor:'#FFF4F1'}}>
        <Box sx={{display:'flex' , flexDirection:'row', ml:'0px', justifyContent:'space-around', alignItems:'center'}}>
          <Box sx={{width:'50%'}}>
            <Typography variant='h5'>Popular Collection</Typography>
            <Typography variant="body2" sx={{mt:'20px'}} >What you wear is how you present yourself to the world, especially today, when human contacts are so quick. Fashion is instant language</Typography>
          </Box>

          <Button sx={{
              background:'#DF9573',
              mt: {xs:'20px', sm:'30px'},
              borderRadius:'30px',
              '&:hover': {
                backgroundColor: '#1E1E1E', 
                color:'',// Add hover effect
                transition: 'background-color 0.3s ease-in-out',
              },
            }} variant="contained">Know More</Button>
        </Box>
        <Box >
          <Slidercom />
        </Box>
      </Box>
    )
}
