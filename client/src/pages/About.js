import React from 'react'
import { Hero } from '../components/aboutpage/Hero'
import { Marquees } from '../components/aboutpage/Marquee'
import { Feature } from '../components/aboutpage/Feature'
import { Printing } from '../components/aboutpage/Printing'
import  Colors  from '../components/aboutpage/Colors'
import { Gsm } from '../components/aboutpage/Gsm'
import { Typography, useMediaQuery } from '@mui/material'
import { Measurement } from '../components/aboutpage/Measurement'
import { Shipping } from '../components/aboutpage/Shipping'
import Fabric from '../components/aboutpage/Fabric'
import InputForm from '../components/ContactUs/InputForm'
import { Print } from '../components/aboutpage/Print'
import Packaging from '../components/aboutpage/Packaging'

export const About = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <>
      <Hero />
      <Marquees />
      {/* <Feature /> */}
     <Typography
     align='center'
     marginTop={10}
                variant='h3'
                sx={{
                    fontSize:isSmallScreen ? '30px':'50px',
                    fontFamily: ['integral-Regular'].join(','),
                    marginBottom: '1px',
                }}
            >
                Services we <span style={{ fontFamily: ['integral-Regular'].join(','),color: '#DF9573' }}>offer</span><br /><br />
            </Typography>
      <Fabric/>
      <Colors />
      <Gsm />
      <Measurement />
      <Print/>
      {/* <Printing /> */}
      <Packaging/>
      <Shipping/>
    </>
  )
}
