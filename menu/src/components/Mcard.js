import React from "react";

const Mcard = (props) => {
  return (
    <div className="col-3 position-relative rounded-pill my-6 mx-3">
      <div className="card " style={{ width: "18rem" }}>
        <img
          src={props.src}
          style={{ width: "auto", height: "200px" }}
          className="card-img-top"
          alt="..."
        />
        <button className="btn btn-dark position-absolute top-0 start-0 rounded-pill">
        <i class="bi bi-star-fill " style={{color:"gold"}}>4.5</i>
        </button>
        <button className="btn btn-light position-absolute top-0 end-0 rounded-circle">
          <i class="bi bi-heart "></i>
        </button>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mcard;
