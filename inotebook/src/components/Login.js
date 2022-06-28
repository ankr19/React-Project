import React, { useContext, useState } from "react";
import UserContext from "../auth/UserContext";

const Login = () => {
  let context = useContext(UserContext);
  let {login} = context;
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleClick = () => {
    login(creditial);
  };
  const [creditial, setCreditial] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCreditial({ ...creditial, [e.target.name]:e.target.value });
  };

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
                  id="email"
                  placeholder="name@example.com"
                  name="email"
                  value={creditial.email}
                  onChange={handleChange}
                />
                <label htmlFor="email">Email address</label>
              </div>
              <div className="form-floating">
              <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  name="password"
                  value={creditial.password}
                  onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
              </div>

              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button
                className="w-100 btn btn-lg btn-primary"
                type="submit"
                onClick={handleClick}
              >
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
