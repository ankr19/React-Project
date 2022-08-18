import React from "react";
import { useContext } from "react";
import { useState } from "react";
import UserContext from "../auth/UserContext";

const Signup = () => {
  const [creditial, setCreditial] = useState({
    name: "",
    email: "",
    password: "",
    epassword: "",
  });
  let context = useContext(UserContext);
  let { signup } = context;

  const handleChange = (e) => {
    setCreditial({ ...creditial, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (check(creditial.password, creditial.epassword))
    {
      signup(creditial.name, creditial.email, creditial.password);
    }
    else{

    }
    console.log("sign up: ", creditial);
    
  };

  const check = (password, password2) => {
    if (password === password2) {
      return true;
    }
    return false;
  };

  return (
    <div className="container">
      <form className="row g-3 needs-validation" noValidate>
        <div className="col-md-4 position-relative">
          <label htmlFor="Fname" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={creditial.name}
            onChange={handleChange}
            required
          />
          <div className="valid-tooltip">Looks good!</div>
        </div>
        <div className="col-md-4 position-relative">
          <label htmlFor="Email" className="form-label">
            Email
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="email">
              <i className="bi bi-envelope"></i>
            </span>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={creditial.email}
              aria-describedby="EmailPrepend"
              onChange={handleChange}
              required
            />
            <div className="invalid-tooltip">Please enter valid Email.</div>
          </div>
        </div>
        <div className="col-md-4 position-relative">
          <label htmlFor="Password" className="form-label">
            password
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="PasswordPrepend">
              <i className="bi bi-lock-fill"></i>
            </span>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={creditial.password}
              aria-describedby="PasswordPrepend"
              onChange={handleChange}
              required
            />
            <div className="invalid-tooltip">Please enter valid Password.</div>
          </div>
        </div>
        <div className="col-md-4 position-relative">
          <label htmlFor="validationTooltipUsername" className="form-label">
            Re-password
          </label>
          <div className="input-group has-validation">
            <span
              className="input-group-text"
              id="validationTooltipUsernamePrepend"
            >
              <i className="bi bi-lock-fill"></i>
            </span>
            <input
              type="password"
              className="form-control"
              id="epassword"
              name="epassword"
              value={creditial.epassword}
              onChange={handleChange}
              aria-describedby="validationTooltipUsernamePrepend"
              required
            />
            <div className="invalid-tooltip">Please enter valid Password.</div>
          </div>
        </div>

        <div className="col-12">
          <button
            onClick={handleClick}
            className="btn btn-primary"
            type="submit"
          >
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
