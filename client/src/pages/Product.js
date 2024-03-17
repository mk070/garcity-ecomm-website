import React from 'react'
import {Box, Container, Grid} from "@mui/material"
import { Slider } from '../components/Product/Slider'
import { Clothes } from '../components/Product/Clothes'
import { Fabric } from '../components/Product/Fabric'

export const Product = () => {
  return (
  <>
     <Slider/>
     <Clothes/>
     <Clothes/>
     <Clothes/>
     <Fabric/>
   </>
  )
}
