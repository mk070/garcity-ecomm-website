import React from 'react'
import  Banner  from '../components/categories/Banner'
import { Breadcrumbs } from '@mui/material'
import IconBreadcrumbs from '../components/categories/Breadcrums'
import tshirts from "../assets/images/mens.png"
import { Collections } from '../components/categories/Collections'


export const MensWear = () => {
  return (
    <>
        <Banner image={tshirts} />
        <IconBreadcrumbs lastBreadcrumb='Mens wear'/>
        <Collections />
    </>
  )
}
