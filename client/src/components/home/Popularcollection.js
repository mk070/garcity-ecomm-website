import { Box , Typography,Button} from '@mui/material'
import React from 'react'
import { Homeslider } from './Homeslider'
 
export const Popularcollection = () => {
  return (
      <Box sx={{display:'flex', justifyContent:'center', flexDirection:'column', bgcolor:'', paddingTop:'60px'}}>
        <Box sx={{display:'flex' , flexDirection:{sm:'row',xs:'column'}, ml:'0px', justifyContent:'space-around', alignItems:'center'}}>
          <Box sx={{width:{sm:'50%',xs:'100%'}, padding:{xs:'2rem ', sm:''} }} >
            <Typography variant='h5' sx={{width:{xs:'100%'},fontSize:{sm:'32px'}, fontFamily: "integral-Regular  !important" }}>Popular Work</Typography>
            <Typography variant="body2" sx={{mt:'20px', fontSize:{sm:'18px'}}} >
              Our popular creations are crafted with utmost care for
              numerous startup brands! Begin your clothing brand
              journey with us.
            </Typography>
          </Box>

          <Button sx={{
              display:{xs:'none', sm:'flex'},
              background:'#DF9573',
              mt: {xs:'0px', sm:'30px'},
              borderRadius:'30px',
              '&:hover': {
                backgroundColor: '#1E1E1E', 
                color:'',// Add hover effect
                transition: 'background-color 0.3s ease-in-out',
              },
            }} variant="contained">Know More</Button>
        </Box>
        <Box sx={{ alignItems:{xs:'center'},flexDirection:{xs:'column'},display:{xs:'flex'} }} >
          <Homeslider />
          <Button sx={{
              display:{sm:'none', xs:'flex'},
              width:{xs:'120px'},
              fontSize:{xs:'12px'},
              background:'#DF9573',
              mt: {xs:'0px', sm:'30px'},
              borderRadius:'30px',
              '&:hover': {
                backgroundColor: '#1E1E1E', 
                color:'',// Add hover effect
                transition: 'background-color 0.3s ease-in-out',
              },
            }} variant="contained">Know More</Button>
        </Box>
      </Box>
    )
}
