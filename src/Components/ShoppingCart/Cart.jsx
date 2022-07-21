import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../redux/reducers/index";
import "./CartStyle.css";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartProduct.CartProducts);

  return (
    <div>
      <table id="cartTable">
        <thead>
          <tr>
            <td>Product</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Total</td>
            <td>Remove</td>
          </tr>
        </thead>
        <tbody>
          {cart.map((product, index) => {
            return (
              <tr key={index}>
                <td>
                  <div className="wrapper">
                    <img src={product.image} alt={product.alt} />
                    {product.name}
                  </div>
                </td>
                <td> $ {product.price}</td>
                <td>
                  <div className="wrapper-center">
                    <button
                      onClick={() => dispatch(decrementQuantity(product))}
                      disabled={product.quantity === 1}
                    >
                      -
                    </button>
                    <span className="num">{product.quantity}</span>
                    <button
                      onClick={() => dispatch(incrementQuantity(product))}
                      disabled={product.newStock === 0}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td> $ {product.total}</td>
                <td>
                  <button
                    style={{ border: "none", backgroundColor: "transparent" }}
                    onClick={() => dispatch(removeFromCart(product))}
                  >
                    <i>
                      <FontAwesomeIcon
                        icon={faTrash}
                        color="#d5ae99"
                        size="2x"
                      />
                    </i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        {cart.length > 0 && (
          <tfoot>
            <tr>
              <td colSpan="3" style={{ textAlign: "right" }}>
                Total
              </td>
              <td colSpan="2" style={{ textAlign: "left" }}>
                {cart.length > 0
                  ? `$ ${cart.reduce((acc, product) => {
                      return acc + product.total;
                    }, 0)}`
                  : "$ 0.00"}
              </td>
            </tr>
          </tfoot>
        )}
      </table>
      <div className="btn-checkout">
        {cart.length > 0 && (
          <Link to="/checkout">
            <button>Checkout</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Cart;
