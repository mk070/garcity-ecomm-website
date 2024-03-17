import React from 'react'
import {Box,Typography} from '@mui/material'
import bgimg from '../../assets/images/bgimg.png'
import img from '../../assets/images/feature1.png'

export const Feature = () => {
  return (
    <Box  sx={{marginBottom:{sm:'80px'},display:'flex', justifyContent:'space-around', alignItems:'center',padding:{sm:'0 180px', xs:'40px 20px'}, flexDirection:'column', bgcolor:'#FFF4F1'}}>
        <Box sx={{display:'flex' ,width:'100%', flexDirection:'row', ml:'0px', justifyContent:'center', alignItems:'center'}}>
            <Typography variant='h5' sx={{fontSize:{xs:"", sm:'26px'}}}> Don’t let anyone tell you that you have to be a certain way. <span style={{ color: '#DF9573' }}> Be unique</span>, be what you feel like being. <br /> <span style={{ color: '#DF9573' }}> Life is too short </span>to be perfect.  </Typography>
        </Box>

        <Box sx={{display:'flex',mt:{sm:'80px',xs:'40px'}, flexDirection:{sm:'row',xs:'column'}}}>
            <Box sx={{width:{sm:'30%', xs:'60%'}, mt:'',position:'relative'}}>
                <img width={'100%'} src={bgimg} alt="" srcset="" />
                <img width={'102%'} src={img} style={{position:'absolute', top:'1px',right:'2px', transform: 'rotate(1deg)'}} alt="" srcset="" />
            </Box>

            <Box sx={{width:{sm:'60%'}, display:'flex',pt:'30px', flexDirection:'column', ml:'120px'}}>
                <Typography variant="h4" sx={{fontSize:{sm:'42px'}}} color marginBottom={''}> What we do here ? </Typography>
                <Typography variant="body1" sx={{fontSize:{sm:'18px'},lineHeight:{sm:'30px'}, mt:{sm:'30px'}}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, delectus, eaque nulla aliquid commodi sunt similique libero expedita neque fugit facilis at inventore voluptatum totam voluptatibus earum cumque fuga nobis. Lorem ipsum dolorcusandis modm autem eius! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed fugiat accusantium vero nobis, culpa dolorum dicta laboriosam quisquam ipsum magnam id molestias quas suscipit accusamus neque repudiandae modi voluptatum exercitationem! </Typography>
            </Box>
        </Box>
    </Box>  )
}
