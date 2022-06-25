import React from 'react'
import image1 from '../images/Burger.jpg'
import image2 from '../images/Burger2.jpg'
import image3 from '../images/Chicken Biryani.jpg'
import image4 from '../images/Chicken dish1.jpg'
import image5 from '../images/Chicken dish2.jpg'
import image6 from '../images/Chicken dish3.jpg'
import image7 from '../images/chicken dish4.jpg'
import image8 from '../images/chicken tikka.jpg'
import image9 from '../images/Chicken wings.jpg'
import image10 from '../images/cupcake.jpg'
import image11 from '../images/diet.jpg'

import Card from './Mcard'

const Jcard = () => {
  return (
    <div className='row'>
      <Card src={image1} />
      <Card src={image2} />
      <Card src={image3} />
      <Card src={image4} />
      <Card src={image5} />
      <Card src={image6} />
      <Card src={image7} />
      <Card src={image8} />
      <Card src={image9} />
      <Card src={image10} />
      <Card src={image11} />

    </div>
  )
}

export default Jcard
