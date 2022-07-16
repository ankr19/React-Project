import React from "react";
import Top2 from "./Top2";

const Tops = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item border-end">hello</li>
              <li className="nav-item border-end">hello</li>
              <li className="nav-item ">hello</li>
              <li></li>
            </ul>
          </div>
          <div className="d-flex">
            hello
          </div>
        </div>
      </nav>
      {/* <div
        class="d-flex justify-content-between mb-3 border-bottom text-center"
        style={{ fontSize: "0.8em" }}
      >
        <div class="d-inline-flex text-uppercase">
          <div className="p-2  border-end">Hello</div>
          <div className="p-2 border-end">Hello</div>
          <div className="p-2 ">Hello</div>
        </div>

        <div class="">Flex item 3</div>
      </div> */}
      <div
        className="d-flex justify-content-center text-uppercase fw-bolder"
        style={{
          fontFamily: "'Times New Roman', Times, serif",
          fontSize: "45px",
        }}
      >
        The Time of India
      </div>
      <Top2 />
    </div>
  );
};

export default Tops;
