import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import "./App.css";
import Card1 from "./components/card-1/Card1";
import Card2 from "./components/card-2/Card2";
import Card3 from "./components/card-3/Card3";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <CartProvider>
      <div>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/">
              <Route path="/dish" element={<Card1 />} />
              <Route path="/dish2" element={<Card2 />} />
              <Route path="/dish3" element={<Card3 />} />
            </Route>
          </Routes>
        </div>
      </div>
      
    </CartProvider>
  );
}

export default App;
