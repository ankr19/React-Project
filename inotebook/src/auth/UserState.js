import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";

const UserState = (props) => {
  //const [creditial, setCreditial] = useState({email:"",password:""})
  let history = useNavigate();
  const [success, setSuccess] = useState(false);

  const login = async (creditial) => {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: creditial.email,
        password: creditial.password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      history("/");
      setSuccess(json.success);
      props.showAlert("Logging successfully", "success");
    } else {
      alert("Invalid Creditials");
    }
  };

  const signup = async (name, email, password) => {
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      console.log(json)
      
      setSuccess(json.success);
      props.showAlert("SignUp successfully","success");
      history("/");
    } else {
      props.showAlert("Invalid Creditials","danger");
    }
  };

  return (
    <UserContext.Provider value={{ login, signup }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
