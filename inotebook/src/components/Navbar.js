import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../auth/UserContext";
const Navbar = () => {
  // let context = useContext(UserContext);
  let history = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    history("/login");
  };
  // let success = context;
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <i
              className="bi bi-journals"
              style={{ fontSize: "1.5 rem", color: "red" }}
            ></i>
            INoteBook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/">
                Features
              </Link>
              <Link className="nav-link" to="/">
                Pricing
              </Link>
            </div>
          </div>
          {!(localStorage.getItem("token")) ? (
            <form className="d-flex">
              <Link
                type="button"
                className="btn btn-outline-primary mx-2"
                to="/login"
              >
                Login
              </Link>
              <Link
                type="button"
                className="btn btn-outline-primary"
                to="/signup"
              >
                SignUp
              </Link>
            </form>
          ) : (
            <Link
              className="btn btn-outline-primary"
              to="/login"
              onClick={handleLogOut}
              role="button"
            >
              LogOut
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
