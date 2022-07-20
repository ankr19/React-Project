import React, { useRef } from "react";
import Clothcd from "./Clothcd";

const Search = () => {
  const ref = useRef(null);
  return (
    <div className="container text-center w-50">
      <div className="input-group input-group-lg border border-white ">
        <input
          type="text"
          className="form-control border-0"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon2"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          ref={ref}
        />
        <span
          className="input-group-text border-0"
          id="basic-addon2"
          style={{ backgroundColor: "white" }}
        >
          <button
            className="btn"
            style={{ backgroundColor: "white", fontSize: "1.2em" }}
          >
            <i className="bi bi-search"></i>
          </button>
        </span>
      </div>
      <div className="collapse my-3" id="collapseExample">
        <div className="card card-body">
          <div className="grid">
            <div className="col float-start">
              <h6>Latest Trend</h6>
            </div>
            <div className="row">
              <Clothcd />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
