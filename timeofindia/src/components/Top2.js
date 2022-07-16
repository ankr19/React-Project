import React from "react";
import AddIcon from '@mui/icons-material/Add';
const Top2 = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light" style={{fontSize:'1em'}}>
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="/" style={{fontFamily:'serif',color:"black"}}>
           TOI<AddIcon color="warning" fontSize="small" />
          </a>
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
                <a className="nav-link active"  data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link disabled">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Top2;
