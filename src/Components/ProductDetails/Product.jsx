import React from "react";
import PropTypes from "prop-types";
import "./Product.css";

function Product({ product }) {
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
          <input type="number"></input>
          <button>Add to cart</button>
        </div>
      </div>
    </>
  );
}

export default Product;
Product.propTypes = {
  product: PropTypes.object,
};
