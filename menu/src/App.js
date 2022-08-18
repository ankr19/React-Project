import React from "react";
import "./App.css";
import CartState from "./auth/CartState";
import Cart from "./components/Cart";
import Home from "./components/Home";

import LeftBar from "./components/LeftBar";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <CartState>
        {/* <Navbar /> */}
        <LeftBar />
        <Cart />
      </CartState>
    </>
  );
}

export default App;
