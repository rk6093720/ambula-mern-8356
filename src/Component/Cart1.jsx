import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../Context/Cart";
import Rating from "./Rating";
const Cart1 = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);
  return (
    
    <div className="home">
      <div className="productContainer">
        <li>
          {cart.map((prod) => (
            <div key={prod.id}>
              <div>
                <div md={2}>
                  <image src={prod.image} alt={prod.name} fluid rounded />
                </div>
                <div md={2}>
                  <span>{prod.name}</span>
                </div>
                <div md={2}>₹ {prod.price}</div>
                <div md={2}>
                  <Rating rating={prod.ratings} />
                </div>
                <div md={2}>
                  <form
                    as="select"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </form>
                </div>
                <div md={2}>
                  <button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </li>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
        <button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart1