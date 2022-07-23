import React from 'react'
import { Link } from 'react-router-dom'
import user from '../../';
const Header = () => {
  return (
    <div className='header'>
      <Link to='/'> <div className="log">Movie Log</div></Link>
     
      <div className='user-imge'>
        <img src={''} alt="user" />

      </div>
    </div>
  )
}

export default Header
