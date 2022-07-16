import React from 'react'
import {cloth} from '../cloth'
const Clothcd = () => {
  const handleClick = ()=>{ 
    console.log("object: ",cloth);
  }
  return (
    <div>
      <button onClick={handleClick}>click me</button>
    </div>
  )
}

export default Clothcd
