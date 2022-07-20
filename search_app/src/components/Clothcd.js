import React from "react";
import { cloth } from "../cloth";
const Clothcd = () => {
  const handleClick = () => {
    console.log("object: ", cloth);
  };
  return (
    <div className="bg-image hover-zoom">
      <button onClick={handleClick}>click me</button>
      <div class="bg-image hover-zoom">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/standard/city/053.webp"
          class="w-100"
          alt=""
        />
      </div>
    </div>
  );
};

export default Clothcd;
