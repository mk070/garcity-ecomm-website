import {React,useEffect} from 'react'
import  Banner  from '../components/categories/Banner'
import IconBreadcrumbs from '../components/categories/Breadcrums'
import banner from "../assets/images/sportsWear/4.avif"
import { Collections } from '../components/categories/Collections'

import image1 from "../assets/images/sportsWear/Athletic_T-Shirt.avif"
import image2 from "../assets/images/sportsWear/Basketball_Shorts.avif"
import image3 from "../assets/images/sportsWear/Compression_shorts.avif"
import image4 from "../assets/images/sportsWear/Cropped_tank_top.avif"
import image5 from "../assets/images/sportsWear/Dry_fitt-shirt.avif"
import image6 from "../assets/images/sportsWear/Running_leggings.avif"
import image7 from "../assets/images/sportsWear/Soccer_Jersey.avif"
import image8 from "../assets/images/sportsWear/Sports_bra.avif"
import image9 from "../assets/images/sportsWear/Track_Jacket.avif"
import image10 from "../assets/images/sportsWear/Yoga_Pants.avif"


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
