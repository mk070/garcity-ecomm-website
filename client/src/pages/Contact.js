import { Slider } from '../components/Product/Slider'
import React from 'react'
// import { InputForm } from '../components/ContactUs/InputForm'
import { CatchLine } from '../components/ContactUs/CatchLine'
import { Detials } from '../components/ContactUs/Detials'
import { Maps } from '../components/ContactUs/Maps'
import { RevealImage } from '../components/ContactUs/RevealImage'
import { AnimatedForm } from '../components/ContactUs/AnimatedForm'

export const Contact = () => {
  return (
    <>   

    <AnimatedForm/>
    {/* <RevealImage/> */}
    <CatchLine/>
    <Detials/>
     {/* <Maps/>  */}

      {/* <InputForm/> */}
      <CatchLine/>
      
      <Maps/> 
    </>
  )
}
