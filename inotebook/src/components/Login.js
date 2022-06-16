import React, { useState } from "react";

const Login = () => {
  const handleSubmit = (e)=>{
    e.preventDefault();
  }
  const handleClick = () => {
    console.log("Clicked");
    console.log(creditial)

  }
  const [creditial, setCreditial] = useState({email:"",passowrd:""})

  const handleChange = (e)=>{
    setCreditial({...creditial, [e.target.name]:e.target.value})
  }

  return (
    <div className="container">
      <div className="container">
        <div className="row ">
          <div className="col">
            <i
              className="bi bi-journal-bookmark-fill"
              style={{ fontSize: "15em", color: "#6610f2" }}
            ></i>
          </div>
          <div className="col my-4">
            <h1 className="h3 mb-3 fw-normal text-center">Please Login in</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  name="email"
                  value={creditial.email}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  name="password"
                  value={creditial.passowrd}
                  onChange={handleChange}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleClick}>
                Sign in
              </button>
              <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
