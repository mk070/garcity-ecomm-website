import {React,useEffect} from 'react'
import  Maps  from '../components/ContactUs/Maps'
import Fqa from '../components/ContactUs/Fqa'
import { Hero } from '../components/ContactUs/Hero'
import InputForm from '../components/ContactUs/InputForm'

export const Contact = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);

  },[])
  return (
    <>   
      <Hero />
      <InputForm />
      <Maps/> 
      <Fqa />
    </>
  )
}
