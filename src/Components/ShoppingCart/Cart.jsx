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
      <table id="cartTable" data-testid="cart-table">
        <thead data-testid="cart-table-header">
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody data-testid="cart-table-body">
          {cart.map((product, index) => {
            return (
              <tr key={index} data-testid={`cart-product-${product.id}`}>
                <td>
                  <div className="wrapper">
                    <img src={product.image} alt={product.alt} />
                    Product Name {product.name}
                  </div>
                </td>
                <td data-testid={`cart-product-price-${product.id}`}>
                  {" "}
                  $ {product.price}
                </td>
                <td data-testid={`cart-product-quantity-${product.id}`}>
                  <div className="wrapper-center">
                    <button
                      data-testid={`cart-product-quantity-decrement-${product.id}`}
                      onClick={() => dispatch(decrementQuantity(product))}
                      disabled={product.quantity === 1}
                    >
                      -
                    </button>
                    <span className="num" data-testid={`cart-product-quantity-${product.id}-number`}>{product.quantity}</span>
                    <button
                      data-testid={`cart-product-quantity-increment-${product.id}`}
                      onClick={() => dispatch(incrementQuantity(product))}
                      disabled={product.newStock === 0}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td data-testid={`cart-product-total-${product.id}`}>
                  {" "}
                  $ {product.total}
                </td>
                <td data-testid={`cart-remove-product-${product.id}`}>
                  <button 
                    data-testid={`cart-remove-product-${product.id}-button`}
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
          <tfoot data-testid="cart-table-footer">
            <tr>
              <td colSpan="3" style={{ textAlign: "right" }}>
                Total
              </td>
              <td colSpan="2" style={{ textAlign: "left" }}>
                $
                <span data-testid="cart-total">
                  {cart.length > 0
                    ? cart.reduce((acc, product) => {
                        return acc + product.total;
                      }, 0)
                    : 0}
                </span>
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
