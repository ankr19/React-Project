import React from "react";
import data from "../../data";
import Card from "./Card";
const Card1 = () => {
  return (
    <div>
      <h2 className="text-white">Menu Dish</h2>
      <div className="row">
        {data.map((dish) => {
          return (
            <div className="col">
              <Card dish={dish} key={dish.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card1;
