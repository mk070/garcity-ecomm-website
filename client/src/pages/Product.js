import React from 'react'
import {Box, Container, Grid} from "@mui/material"
import { Slider } from '../components/Slider'
import { Clothes } from '../components/Clothes'
import { Fabric } from '../components/Fabric'

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
