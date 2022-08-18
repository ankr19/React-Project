import React, { useContext } from 'react'
import CartContext from '../auth/CartContext'

const Cart = () => {
    const context = useContext(CartContext);
    const {item} = context();
  return (
    <div>
      {console.log(item)}
    </div>
  )
}

export default Cart
