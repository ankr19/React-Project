import React from "react";
import { useCart } from "react-use-cart";
const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <h2 className="text-center">Your cart is empty</h2>;

  return (
    <>
      <h1>Cart ({totalUniqueItems})</h1>
      {console.log(items)}
      <section className="py-4 container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2>
              Cart({totalUniqueItems}) totoal Items: ({totalItems})
            </h2>
            <table className="table table-light table-hover m-0">
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img
                          src={item.image}
                          style={{ height: "6rem" }}
                          alt="no img"
                        />
                      </td>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <td>
                        <button
                          className="btn btn-info ms-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <button
                        className="btn btn-info ms-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                        <button className="btn btn-danger ms-2" onClick={() => removeItem(item.id)}>
                          &times;
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-auto ms-auto">
            <h2>Totol Price:${cartTotal}</h2>
          </div>
          <div className="col-auto">
            <button className="btn btn-danger m-2" onClick={()=>{ emptyCart()}}> Clear Cart</button>
          </div>
          </div>
      </section>
    </>
  );
};

export default Cart;
