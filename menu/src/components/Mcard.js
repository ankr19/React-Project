import React from "react";

const Mcard = (props) => {
  return (
    <div>
      <div
        className="card my-3"
        style={{ width: "18rem", backgroundColor: "#FFCCFF" }}
      >
        <img
          src={props.src}
          style={{ width: "auto", height: "200px" }}
          className="card-img-top"
          alt="..."
        />
        <button className="btn btn-dark position-absolute top-0 start-0 rounded-pill">
          <i className="bi bi-star-fill " style={{ color: "gold" }}>
            {props.rating}
          </i>
        </button>
        <button className="btn btn-light position-absolute top-0 end-0 rounded-circle">
          <i className="bi bi-heart "></i>
        </button>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
            {props.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mcard;
