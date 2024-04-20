import {React,useEffect} from 'react'
import Scrollsection from '../components/gallery/Scrollsection'
import Hero from '../components/gallery/Hero'
import Text from '../components/gallery/Text'
import { YoutubeVideo } from '../components/gallery/YoutubeVideo'

export const Gallery = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);

  },[])

  return (
    <>
      <Hero />
      <Scrollsection />
      <YoutubeVideo />
    </>
  )
}
