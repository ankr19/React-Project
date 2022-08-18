import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../images/Paneer dish2.jpg";
import "./cardform.css";

const CardForm = () => {
  return (
    <div className="container text-center row my-3">
      <div className="col">
        <Link to="/dish">
          <div className="container ">
            <div
              className="card selected"
              style={{ width: "20rem", height: "15rem" }}
            >
              <img src={img1} className="card-img" alt="..." />
              <h2 style={{ textDecoration: "none" }}>Main Dish</h2>
            </div>
          </div>
        </Link>
      </div>
      <div className="col">
        <Link to="/dish2">
          <div className="container ">
            <div
              className="card selected"
              style={{ width: "20rem", height: "15rem" }}
            >
              <img src={img1} className="card-img" alt="..." />
              <h2 style={{ textDecoration: "none" }}>Special Dish</h2>
            </div>
          </div>
        </Link>
      </div>
      <div className="col">
        <Link to="/dish3">
          <div className="container ">
            <div
              className="card selected"
              style={{ width: "20rem", height: "15rem" }}
            >
              <img src={img1} className="card-img" alt="..." />
              <h2 style={{ textDecoration: "none" }}>Review</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CardForm;
