import React from 'react'
import image1 from '../images/Burger.jpg'
import image2 from '../images/Burger2.jpg'

import Card from './Mcard'

const Jcard = () => {
  return (
    <div className='row'>
      <Card src={image1} />
      <Card src={image2} />
    </div>
  )
}

export default Jcard
