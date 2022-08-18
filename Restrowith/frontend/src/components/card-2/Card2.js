import React from "react";
import special from '../../special'
import CardItem from "./CardItem";
const Card2 = () => {
  return (<div>
    <h2 className="text-white">Menu Dish</h2>
      <div className="row">
        {special.map((dish) => {
          return (
            <div className="col">
              <CardItem dish={dish} key={dish.id} />
            </div>
          );
        })}
      </div>
  </div>)
};

export default Card2;
