import React from 'react'
import  Banner  from '../components/categories/Banner'
import { Breadcrumbs } from '@mui/material'
import IconBreadcrumbs from '../components/categories/Breadcrums'
import banner from "../assets/images/mensWear/mens.png"
import { Collections } from '../components/categories/Collections'

import hoodie from "../assets/images/mensWear/hoodie.png"
import Joggers from "../assets/images/mensWear/Joggers.png"
import Oversized_tshirt from "../assets/images/mensWear/Oversized t-shirt.png"
import Polo_tshirt from "../assets/images/mensWear/Polo t-shirt.png"
import Roundneck_fulls_leevet_shirt from "../assets/images/mensWear/Round neck full sleeve t-shirt.png"
import Roundneck_half_sleeve_tshirt from "../assets/images/mensWear/Round neck half sleeve t-shirt.png"
import Roundneck_sleeveless_tshirt from "../assets/images/mensWear/Round neck sleeveless t-shirt.png"
import Shorts from "../assets/images/mensWear/Shorts.png"
import Sweat_t_shirt from "../assets/images/mensWear/Sweat-t-shirt.png"
import Vneck_half_sleeve_tshirt from "../assets/images/mensWear/V neck half sleeve t-shirt.png"


export const MensWear = () => {
  return (
    <>
        <Banner image={banner} />
        <IconBreadcrumbs lastBreadcrumb='Mens wear'/>
        <Collections
          names={['hoodie' ,'Joggers','Oversized-tshirt','Polo-tshirt','Roundneck-full-sleeve-tshirt','Roundneck-half-sleeve-tshirt','Roundneck-sleeveless-tshirt','Shorts','Sweat_t_shirt','Vneck_half_sleeve_tshirt']}
          images={[hoodie,Joggers,Oversized_tshirt,Polo_tshirt,Roundneck_fulls_leevet_shirt,Roundneck_half_sleeve_tshirt,Roundneck_sleeveless_tshirt,Shorts,Sweat_t_shirt,Vneck_half_sleeve_tshirt]}/>
    </>
  )
}
