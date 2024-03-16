import React from 'react'
import {Box,Typography} from '@mui/material'
import bgimg from '../assets/images/bgimg.png'
import img from '../assets/images/feature1.png'

export const Feature = () => {
  return (
    <Box marginBottom={'80px'} sx={{display:'flex', justifyContent:'space-around', alignItems:'center',padding:'0 180px', flexDirection:'column', bgcolor:'#FFF4F1'}}>
        <Box sx={{display:'flex' ,width:'100%', flexDirection:'row', ml:'0px', justifyContent:'center', alignItems:'center'}}>
            <Typography variant='h5'> Don’t let anyone tell you that you have to be a certain way. <span color='white'> Be unique</span>, be what you feel like being. Life is too short to be perfect.  </Typography>
        </Box>

        <Box sx={{display:'flex',alignItems:'',mt:'80px', flexDirection:'row'}}>
            <Box sx={{width:'30%', mt:'',position:'relative'}}>
                <img width={'100%'} src={bgimg} alt="" srcset="" />
                <img width={'102%'} src={img} style={{position:'absolute', top:'1px',right:'2px', transform: 'rotate(1deg)'}} alt="" srcset="" />
            </Box>

            <Box sx={{width:'50%', display:'flex',pt:'30px', flexDirection:'column', ml:'120px'}}>
                <Typography variant="h4" color marginBottom={''}> What we do here ? </Typography>
                <Typography variant="body2" marginTop={'50px'}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, delectus, eaque nulla aliquid commodi sunt similique libero expedita neque fugit facilis at inventore voluptatum totam voluptatibus earum cumque fuga nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, nulla sit ex cupiditate rerum maxime a libero molestiae recusandae adipisci minima similique! Adipisci, sed. Reiciendis modi repudiandae magnam autem eius! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed fugiat accusantium vero nobis, culpa dolorum dicta laboriosam quisquam ipsum magnam id molestias quas suscipit accusamus neque repudiandae modi voluptatum exercitationem! </Typography>
            </Box>
        </Box>
    </Box>  )
}
