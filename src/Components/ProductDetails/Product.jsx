import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/reducers/index";
import "./Product.css";

export default function Product({ product }) {
  const dispatch = useDispatch();
  const btnAddToCart = useRef();
  const [quantity, setQuantity] = useState(1);
  const cart = useSelector((state) =>
    state.cartProduct.CartProducts.find(
      (item) => item.id === product.results[0].id
    )
  );

  const onHandleChange = (e) => {
    btnAddToCart.current.disabled = quantity > product.results[0].data.stock;
    if (parseInt(e.target.value) <= product.results[0].data.stock) {
      product.results[0].newStock =
        product.results[0].data.stock - parseInt(e.target.value);
      product.results[0].quantity = parseInt(e.target.value);
    }
    setQuantity(parseInt(e.target.value));
  };

  return (
    <>
      <div>
        <table id="info-main">
          <tbody>
            <tr>
              <td>Price: </td>
              <td>$ {product.results[0].data.price}</td>
            </tr>
            <tr>
              <td>SKU: </td>
              <td>{product.results[0].data.sku}</td>
            </tr>
            <tr>
              <td>Category:</td>
              <td>{product.results[0].data.category.slug}</td>
            </tr>
            <tr>
              <td>Tags:</td>
              <td>{product.results[0].tags.join(",")}</td>
            </tr>
          </tbody>
        </table>
        <p className="info-description">
          {product.results[0].data.short_description}
        </p>

        <table id="info-spec">
          <thead>
            <tr>
              <td>Name</td>
              <td>Value</td>
            </tr>
          </thead>
          <tbody>
            {product.results[0].data.specs.map((attribute, index) => {
              return (
                <tr key={index}>
                  <td>{attribute.spec_name}</td>
                  <td>{attribute.spec_value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="info-buttons">
          <input
            type="number"
            value={quantity || ""}
            onChange={onHandleChange}
            min={0}
            max={product.results[0].data.stock}
          ></input>
          <button
            ref={btnAddToCart}
            onClick={() => dispatch(addToCart(product.results[0]))}
            disabled={cart !== undefined ? cart.newStock === 0 : false}
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

//export default Product;
Product.propTypes = {
  product: PropTypes.object,
};
