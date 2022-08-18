import React, { useState } from "react";
import CartContext from "./CartContext";
const CartState = (props) => {
  const [item, setItem] = useState([]);
  let addItem = (e,dish) => {
    e.preventDefault();
    setItem(item.concat(dish));
  };
  return (
    <CartContext.Provider value={{ addItem, item }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
