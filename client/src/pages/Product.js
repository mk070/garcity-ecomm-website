import React from 'react'
import {Box, Container, Grid} from "@mui/material"
import { Slider } from '../components/Product/Slider'
import { Clothes } from '../components/Product/Clothes'
import { Fabric } from '../components/Product/Fabric'
import IconBreadcrumbs from '../components/categories/Breadcrums'
import { MoveupButton } from '../components/MoveupButton'

export const Product = () => {
  return (
  <>
     <Slider/>
     <Clothes categorie='Mens wear '/>
     <Clothes categorie='Womens wear '/>
     <Clothes  categorie="Kid's wear"/>
     <Fabric/>
     <MoveupButton />
   </>
  )
}
