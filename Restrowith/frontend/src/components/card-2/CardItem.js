import React from 'react'
import { useCart } from 'react-use-cart';

const CardItem = ({dish}) => {
    const { addItem } = useCart();
  return (
    <div>
      <div className="card rounded my-2" style={{ width: "18rem" }}>
        <img src={dish.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{dish.name}</h5>
          <h5 className="card-title">Price: {dish.price}</h5>
          <h5 className="card-title">{dish.desc}</h5>
          <button key={dish.id}
            onClick={() => {
              addItem(dish);
            }}
            className="btn btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardItem
