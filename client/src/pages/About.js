import React from 'react'
import { Hero } from '../components/aboutpage/Hero'
import { Marquee } from '../components/aboutpage/Marquee'
import { Feature } from '../components/aboutpage/Feature'
import { Printing } from '../components/aboutpage/Printing'
import { Colors } from '../components/aboutpage/Colors'
import { Gsm } from '../components/aboutpage/Gsm'

export const About = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <Feature />
      <Printing />
      <Colors />
      <Gsm />
    </>
  )
}
