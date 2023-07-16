import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { CartState } from "../Context/Cart";


const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  return (
    <div bg="dark" variant="dark" style={{ height: 80 }}>
      <div>
        <div>
          <Link to="/">Shopping Cart</Link>
        </div>
        {useLocation().pathname.split("/")[1] !== "cart" && (
          <div className="search">
            <form
              style={{ width: 500 }}
              type="search"
              placeholder="Search a product..."
              className="m-auto"
              aria-label="Search"
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
            />
          </div>
        )}
        <div>
          <div alignRight>
            <div variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <div>{cart.length}</div>
            </div>

            <div style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₹ {prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;