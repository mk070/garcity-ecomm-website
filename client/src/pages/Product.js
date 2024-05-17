import {React,useEffect} from 'react'
import {Box, Container, Grid} from "@mui/material"
import { Slider } from '../components/Product/Slider'
import { Clothes } from '../components/Product/Clothes'
import IconBreadcrumbs from '../components/categories/Breadcrums'

import image1 from "../assets/images/mensWear/hoodie.png"
import image2 from "../assets/images/mensWear/Oversized t-shirt.png"
import image3 from "../assets/images/mensWear/Joggers.avif"
import image4 from "../assets/images/mensWear/Sweat-t-shirt.png"


import image5 from "../assets/images/womensWear/Jogger.avif"
import image6 from "../assets/images/womensWear/Pajama_set.avif"
import image7 from "../assets/images/womensWear/Round_neck_sleeveless_top.avif"
import image8 from "../assets/images/womensWear/Sweat-t-shirt.avif"


import image9 from "../assets/images/kidsWear/Kids Frock.png"
import image10 from "../assets/images/kidsWear/Pajama set.png"
import image11 from "../assets/images/kidsWear/Set dress.png"
import image12 from "../assets/images/kidsWear/Sweatshirt.png"


import image13 from "../assets/images/sportsWear/Basketball Shorts.png"
import image14 from "../assets/images/sportsWear/Cropped tank top.png"
import image15 from "../assets/images/sportsWear/Soccer Jersey.png"
import image16 from "../assets/images/sportsWear/Track Jacket.png"


export const Product = () => {
   useEffect(()=>{
      window.scrollTo(0, 0);
  
    },[])
  return (
  <>
     <Slider/>

     <Clothes 
        images={[image1,image2, image3, image4]}
        names={['hoodie','Oversized t-shirt','Joggers','Sweat-t-shirt']}
        category="Men's wear"/>

     <Clothes  
        images={[image5,image6, image7, image8]}
        names={['Jogger','Pajama set','Round neck sleeveless top','Sweat-t-shirt']}
        category="Women's wear "/>

     <Clothes  
        images={[image9, image10,image11,image12]}
        names={['Kids Frock','Pajama set','Set dress','Sweatshirt']}
        category="Kid's wear"/>

     <Clothes  
        images={[image13,image14,image15,image16]}
        names={['Basketball Shorts','Cropped tank top','Soccer Jersey','Track Jacket']}
        category="Sports wear"/>
        
     {/* <Fabric/> */}
   </>
  )
}
