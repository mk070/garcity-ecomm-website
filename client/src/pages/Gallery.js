import React from 'react'
import Scrollsection from '../components/gallery/Scrollsection'
import Hero from '../components/gallery/Hero'
import Text from '../components/gallery/Text'
import { YoutubeVideo } from '../components/gallery/YoutubeVideo'

export const Gallery = () => {
  const sampleVideoUrls = [
    'https://www.youtube.com/watch?v=b6FBWsz7VaI',
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    'https://www.youtube.com/watch?v=IwzUs1IMdyQ',
  ];
  return (
    <>
      <Hero />
      {/* <Text /> */}
      <Scrollsection />
      <YoutubeVideo videoUrls={sampleVideoUrls} />
    </>
  )
}
