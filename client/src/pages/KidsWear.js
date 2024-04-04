import React from 'react'
import  Banner  from '../components/categories/Banner'
import { Breadcrumbs } from '@mui/material'
import IconBreadcrumbs from '../components/categories/Breadcrums'
import banner from "../assets/images/kidsWear/kids.png"
import { Collections } from '../components/categories/Collections'


import image1 from "../assets/images/kidsWear/Kids Frock.png"
import image2 from "../assets/images/kidsWear/Kids pant.png"
import image3 from "../assets/images/kidsWear/Pajama set.png"
import image4 from "../assets/images/kidsWear/Rompers.png"
import image5 from "../assets/images/kidsWear/Round neck t-shirt.png"
import image6 from "../assets/images/kidsWear/Set dress.png"
import image7 from "../assets/images/kidsWear/Shorts.png"
import image8 from "../assets/images/kidsWear/Sweatshirt dungaree shorts.png"
import image9 from "../assets/images/kidsWear/Sweatshirt.png"


export const KidsWear = () => {
  return (
    <>
        <Banner image={banner} />
        <IconBreadcrumbs lastBreadcrumb='Kids wear'/>
        <Collections 
          names={['Kids Frock' ,'Kids pant','Pajama set','Rompers','Round neck t-shirt','Set dress','Shorts','Sweatshirt dungaree shorts','Sweatshirt']}
          images={[image1,image2,image3,image4,image5,image6,image7,image8,image9]}/>
    </>
  )
}
