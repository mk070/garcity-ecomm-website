import {React,useEffect} from 'react'
import  Banner  from '../components/categories/Banner'
import { Breadcrumbs } from '@mui/material'
import IconBreadcrumbs from '../components/categories/Breadcrums'
import banner from "../assets/images/sportsWear/4.png"
import { Collections } from '../components/categories/Collections'

import image1 from "../assets/images/sportsWear/Athletic T-Shirt.png"
import image2 from "../assets/images/sportsWear/Basketball Shorts.png"
import image3 from "../assets/images/sportsWear/Compression shorts.png"
import image4 from "../assets/images/sportsWear/Cropped tank top.png"
import image5 from "../assets/images/sportsWear/Dry fit t-shirt.png"
import image6 from "../assets/images/sportsWear/Running leggings.png"
import image7 from "../assets/images/sportsWear/Soccer Jersey.png"
import image8 from "../assets/images/sportsWear/Sports bra.png"
import image9 from "../assets/images/sportsWear/Track Jacket.png"
import image10 from "../assets/images/sportsWear/Yoga Pants.png"


export const SportsWear = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);

  },[])
  return (
    <>
        <Banner image={banner} />
        <IconBreadcrumbs lastBreadcrumb='Sports wear'/>
        <Collections   names={['Athletic T-Shirt' ,'Basketball Shorts','Compression shorts','Cropped tank top','Dry fit t-shirt','Running leggings','Soccer Jersey','Sports bra','Track Jacket','Yoga Pants']}
          images={[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10]}/>
    </>
  )
}
