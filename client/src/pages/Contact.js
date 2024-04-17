import React from 'react'
import { Maps } from '../components/ContactUs/Maps'
import Fqa from '../components/ContactUs/Fqa'
import { Hero } from '../components/ContactUs/Hero'
import InputForm from '../components/ContactUs/InputForm'

export const Contact = () => {
  return (
    <>   
      <Hero />
      <InputForm />
      <Maps/> 
      <Fqa />
    </>
  )
}
