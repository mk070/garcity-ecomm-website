import React from 'react'
import  Banner  from '../components/categories/Banner'
import { Breadcrumbs } from '@mui/material'
import IconBreadcrumbs from '../components/categories/Breadcrums'
import banner from "../assets/images/womensWear/womens.png"
import { Collections } from '../components/categories/Collections'


import image1 from "../assets/images/womensWear/Crop top.png"
import image2 from "../assets/images/womensWear/Hoodie.png"
import image3 from "../assets/images/womensWear/Jogger.png"
import image4 from "../assets/images/womensWear/Oversized t-shirt.png"
import image5 from "../assets/images/womensWear/Pajama set.png"
import image6 from "../assets/images/womensWear/Round neck half sleeve t-shirt.png"
import image7 from "../assets/images/womensWear/Round neck sleeveless top.png"
import image8 from "../assets/images/womensWear/shorts.png"
import image9 from "../assets/images/womensWear/Sweat-t-shirt.png"
import image10 from "../assets/images/womensWear/V neck half sleeve t-shirt.png"

export const WomensWear = () => {
  return (
    <>
        <Banner image={banner} />
        <IconBreadcrumbs lastBreadcrumb='Womens wear'/>
        <Collections
          images={[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10]}
          names={['crop_tape','Hoodie','Jogger','Oversized tshirt','Pajama set','Roundneck half sleeve tshirt','Round neck sleeveless top','shorts', 'Sweat-t-shirt','V neck half sleeve t-shirt']}
        />
    </>
  )
}
