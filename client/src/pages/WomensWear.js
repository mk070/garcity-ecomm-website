import {React,useEffect} from 'react'
import  Banner  from '../components/categories/Banner'
import { Breadcrumbs } from '@mui/material'
import IconBreadcrumbs from '../components/categories/Breadcrums'
import banner from "../assets/images/womensWear/2.avif"
import { Collections } from '../components/categories/Collections'


import image1 from "../assets/images/womensWear/Crop_top.avif"
import image2 from "../assets/images/womensWear/Hoodie.avif"
import image3 from "../assets/images/womensWear/Jogger.avif"
import image4 from "../assets/images/womensWear/Oversized_t-shirt.avif"
import image5 from "../assets/images/womensWear/Pajama_set.avif"
import image6 from "../assets/images/womensWear/Round_neck_half_sleeve_t-shirt.avif"
import image7 from "../assets/images/womensWear/Round_neck_sleeveless_top.avif"
import image8 from "../assets/images/womensWear/shorts.avif"
import image9 from "../assets/images/womensWear/Sweat-t-shirt.avif"
import image10 from "../assets/images/womensWear/V_neck_half_sleeve_t-shirt.avif"

export const WomensWear = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);

  },[])
  return (
    <>
        <Banner image={banner} />
        <IconBreadcrumbs lastBreadcrumb='Womens wear'/>
        <Collections
          images={[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10]}
          names={['Crop Top','Hoodie','Jogger','Oversized tshirt','Pajama set','Roundneck half sleeve tshirt','Round neck sleeveless top','Shorts', 'Sweat-t-shirt','V neck half sleeve t-shirt']}
        />
    </>
  )
}
