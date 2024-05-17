import {React,useEffect} from 'react'
import  Banner  from '../components/categories/Banner'
import { Breadcrumbs } from '@mui/material'
import IconBreadcrumbs from '../components/categories/Breadcrums'
import banner from "../assets/images/mensWear/1.png"
import { Collections } from '../components/categories/Collections'

import image1 from "../assets/images/mensWear/hoodie.avif"
import image2 from "../assets/images/mensWear/Joggers.avif"
import image3 from "../assets/images/mensWear/Oversized t-shirt.png"
import image4 from "../assets/images/mensWear/Polo t-shirt.png"
import image5 from "../assets/images/mensWear/Round neck full sleeve t-shirt.png"
import image6 from "../assets/images/mensWear/Round neck half sleeve t-shirt.png"
import image7 from "../assets/images/mensWear/Round neck sleeveless t-shirt.png"
import image8 from "../assets/images/mensWear/Shorts.png"
import image9 from "../assets/images/mensWear/Sweat-t-shirt.png"
import image10 from "../assets/images/mensWear/V neck half sleeve t-shirt.png"


export const MensWear = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);

  },[])
  return (
    <>
        <Banner image={banner} />
        <IconBreadcrumbs lastBreadcrumb='Mens wear'/>
        <Collections
          names={['Hoodie' ,'Joggers','Oversized-tshirt','Polo-tshirt','Roundneck-full-sleeve-tshirt','Roundneck-half-sleeve-tshirt','Roundneck-sleeveless-tshirt','Shorts','Sweat tshirt','Vneck half-sleeve-tshirt']}
          images={[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10]}/>
    </>
  )
}
