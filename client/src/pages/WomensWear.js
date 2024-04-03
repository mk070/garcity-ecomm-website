import React from 'react'
import  Banner  from '../components/categories/Banner'
import { Breadcrumbs } from '@mui/material'
import IconBreadcrumbs from '../components/categories/Breadcrums'
import banner from "../assets/images/womensWear/womens.png"
import { Collections } from '../components/categories/Collections'


import crop_tape from "../assets/images/womensWear/Crop top.png"
// import crop_tape from "../assets/images/womensWear/Crop top.png"
// import crop_tape from "../assets/images/womensWear/Crop top.png"
// import crop_tape from "../assets/images/womensWear/Crop top.png"
// import crop_tape from "../assets/images/womensWear/Crop top.png"
// import crop_tape from "../assets/images/womensWear/Crop top.png"
// import crop_tape from "../assets/images/womensWear/Crop top.png"
// import crop_tape from "../assets/images/womensWear/Crop top.png"
// import crop_tape from "../assets/images/womensWear/Crop top.png"
// import crop_tape from "../assets/images/womensWear/Crop top.png"

export const WomensWear = () => {
  return (
    <>
        <Banner image={banner} />
        <IconBreadcrumbs lastBreadcrumb='Womens wear'/>
        <Collections
          images={[crop_tape]}
          names={['crop_tape']}
        />
    </>
  )
}
