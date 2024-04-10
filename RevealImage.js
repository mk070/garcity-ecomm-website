import React from 'react'
import Container from '@mui/material/Container'
import puff from '../../assets/images/contactus/paint.jpg'; 

export const RevealImage = () => {
  return (
    <section className='main'>
      <div className='container'>
        <>
        <div className='img-container'>
          <img src ={puff} />
        </div>
        </>
      </div>
    </section>
  )
}
