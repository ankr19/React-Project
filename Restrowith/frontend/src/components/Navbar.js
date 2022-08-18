import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{fontSize:"150%", backgroundColor:"#e3f2fd"}}>
        <div className="container-fluid mx-2">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Home">
                  Home
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <Link className="btn btn-outline-primary" to='/login' style={{}}>Log In</Link>
              <Link className="btn btn-outline-primary mx-2" to="/signup">Sign Up</Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
