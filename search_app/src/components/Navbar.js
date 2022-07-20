import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="container ">
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <div className="container-fluid justify-content-end">
            <a
              className="navbar-bran"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Tooltip on bottom"
              href="/"
            >
              Zevi
            </a>
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-container="body"
              data-bs-toggle="popover"
              data-bs-placement="bottom"
              data-bs-content="Bottom popover"
            >
              Popover
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
