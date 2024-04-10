import { Slider } from '../components/Product/Slider'
import React from 'react'
import { CatchLine } from '../components/ContactUs/CatchLine'
import { Detials } from '../components/ContactUs/Detials'
import { Maps } from '../components/ContactUs/Maps'
import { RevealImage } from '../components/ContactUs/RevealImage'
import { AnimatedForm } from '../components/ContactUs/AnimatedForm'
import GenieModal from '../components/ContactUs/GenieModal'
import Fqa from '../components/ContactUs/Fqa'
import { Hero } from '../components/ContactUs/Hero'
import InputForm from '../components/ContactUs/InputForm'

export const Contact = () => {
  return (
    <>   
      {/* <AnimatedForm/>
      <CatchLine/>
      <Detials/>
      <CatchLine/> */}
      <Hero />
      <InputForm />
      <Maps/> 
      <Fqa />
    </>
  )
}
