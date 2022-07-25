import React from "react";
import Card1 from "./card-1/Card1";

const CardForm = () => {
  return (
    <div className="container text-center row">
      <div className="col">
        <Card1 />
      </div>
      <div className="col">
        <Card1 />
      </div>
      <div className="col">
        <Card1 />
      </div>
    </div>
  );
};

export default CardForm;
