import React from 'react'
import  Banner  from '../components/categories/Banner'
import { Breadcrumbs } from '@mui/material'
import IconBreadcrumbs from '../components/categories/Breadcrums'
import banner from "../assets/images/mensWear/mens.png"
import { Collections } from '../components/categories/Collections'


export const MensWear = () => {
  return (
    <>
        <Banner image={banner} />
        <IconBreadcrumbs lastBreadcrumb='Mens wear'/>
        <Collections />
    </>
  )
}
