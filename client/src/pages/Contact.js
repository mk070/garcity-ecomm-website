import { Slider } from '../components/Product/Slider'
import React from 'react'
// import { InputForm } from '../components/ContactUs/InputForm'
import { CatchLine } from '../components/ContactUs/CatchLine'
import { Detials } from '../components/ContactUs/Detials'
import { Maps } from '../components/ContactUs/Maps'

export const Contact = () => {
  return (
    <>   
      {/* <InputForm/> */}
      <CatchLine/>
      <Detials/>
      <Maps/> 
    </>
  )
}
