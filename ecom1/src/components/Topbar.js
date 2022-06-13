import React from "react";

const Topbar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">

        <div className="container justify-content-end">
          <a className="navbar-brand" href="?">
            <i class="bi bi-facebook text-primary mx-2"></i>
            <i class="bi bi-twitter text-danger mx-2"></i>
            <i class="bi bi-facebook text-warning mx-2"></i>
            <i class="bi bi-facebook mx-2"></i>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Topbar;
