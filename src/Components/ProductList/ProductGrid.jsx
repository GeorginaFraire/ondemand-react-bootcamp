import React from "react";
import "../Feature-Product/FeatureProduct.css";
import PropTypes from 'prop-types';

function ProductGrid({ list }) {
  return (
    <div >
      <div>
        <h1>This is the product list.</h1>
      </div>
      <div className="product-container">
        {list.map((item) => {
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
                 <button>Add to cart</button>
                 <button>details</button>
                </div>
            </div>
            
          );
        })}
      </div>
    </div>
  );
}

ProductGrid.prototype = {
  list: PropTypes.array.isRequired
}

export default ProductGrid;
