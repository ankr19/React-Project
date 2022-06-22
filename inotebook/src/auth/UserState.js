import React from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";

const UserState = (props) => {
  //const [creditial, setCreditial] = useState({email:"",password:""})
  let history = useNavigate();
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
    console.log(json);
    if(json.success)
    {
      localStorage.setItem('token', json.authtoken);
      history('/');
    }
    else{
      alert('Invalid Creditials')
    }
  };
  return (
    <UserContext.Provider value={{ login }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
