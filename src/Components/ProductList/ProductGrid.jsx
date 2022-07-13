import React from "react";
import "../Feature-Product/FeatureProduct.css";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function ProductGrid({ list, showTitle }) {
  return (
    <div >
      <div>
        {showTitle ? <h1>This is the product list.</h1> : null}
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
}

export default ProductGrid;
