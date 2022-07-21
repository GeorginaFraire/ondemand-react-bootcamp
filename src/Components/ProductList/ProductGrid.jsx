import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/reducers/index";
import "../Feature-Product/FeatureProduct.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ProductGrid({ list, showTitle }) {
  const dispatch = useDispatch();
  const productsCart = useSelector((state) => state.cartProduct.CartProducts);

  return (
    <div>
      <div>{showTitle ? <h1>This is the product list.</h1> : null}</div>
      <div className="product-container">
        {list.map((item) => {
          let productfound = productsCart.find(
            (itemCart) => itemCart.id === item.id
          );
          return (
            <div key={item.id} className="product-card">
              <div className="product-card-img">
                <img
                  src={item.data.mainimage.url}
                  alt={item.data.mainimage.alt}
                ></img>
              </div>
              <div>
                <p>{item.data.name}</p>
                <p>{item.data.category.slug}</p>
                <p>$ {item.data.price}</p>
              </div>
              <div className="product-card-footer">
                <button
                  onClick={() => dispatch(addToCart(item))}
                  disabled={
                    productfound !== undefined
                      ? productfound.newStock === 0
                      : false
                  }
                >
                  Add to cart
                </button>
                <Link to={`/product/${item.id}`}>
                  <button>details</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

ProductGrid.prototype = {
  list: PropTypes.array.isRequired,
  showTitle: PropTypes.bool,
};

export default ProductGrid;
