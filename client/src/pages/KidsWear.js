import {React,useEffect} from 'react'
import  Banner  from '../components/categories/Banner'
import IconBreadcrumbs from '../components/categories/Breadcrums'
import banner from "../assets/images/kidsWear/3.avif"
import { Collections } from '../components/categories/Collections'


import image1 from "../assets/images/kidsWear/Kids_Frock.avif"
import image2 from "../assets/images/kidsWear/Kids_pant.avif"
import image3 from "../assets/images/kidsWear/Pajama_set.avif"
import image4 from "../assets/images/kidsWear/Rompers.avif"
import image5 from "../assets/images/kidsWear/Round_neck_t-shirt.avif"
import image6 from "../assets/images/kidsWear/Set_dress.avif"
import image7 from "../assets/images/kidsWear/Shorts.avif"
import image8 from "../assets/images/kidsWear/Sweat_shirt_dungaree_shorts.avif"
import image9 from "../assets/images/kidsWear/Sweat_shirt.avif"


export const KidsWear = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);

  },[])
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
