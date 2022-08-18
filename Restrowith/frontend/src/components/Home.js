import React, { useEffect } from "react";
import CardForm from "./card-info/CardForm";
import Cart from "../components/Cart";
import {useNavigate} from 'react-router-dom'
const Home = () => {
  let history = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      // allNote();
      history('/')
    } else {
      history("/login");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="container">
        <CardForm />
      </div>
      <div className="container my2">
        <Cart />
      </div>
    </>
  );
};

export default Home;
