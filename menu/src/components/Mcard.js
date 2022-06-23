import React from "react";

const Mcard = (props) => {
  return (
    <div className="col-sm-6">
      <div className="card rounded-pill" style={{ width: "18rem" }}>
        <img
          src={props.src}
          style={{ width: "auto", height: "300px" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <i class="bi bi-heart"></i>
      <i class="bi bi-star"></i>
    </div>
  );
};

export default Mcard;
