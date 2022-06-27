import React from "react";
import { Feature_Products } from "../../mocks/featured-products";
import './FeatureProduct.css';
import "../../App.css"

function FeatureProducts() {
  return (
    <>
      <div className="App-container-title">
        <h1> PRODUCTS </h1>
      </div>
      <div className="product-container">
        {Feature_Products.results.map((item, itemIndex) => {
          return (
            <div key={item.id} className="product-card">
              <div className="product-card-img">
                <img 
                  src={item.data.mainimage.url}
                  alt={item.data.mainimage.alt}
                />
              </div>
              <div className="product-card-title">
              <h3>{item.data.name}</h3>
              </div>
              <div className="product-card-content">
                <p className="category">{item.data.category.slug.toUpperCase()}</p> 
              </div>
              <div className="product-card-footer">
                <p>${item.data.price}</p>
                </div>
            </div>
            
          );
        })}
      </div>
    </>
  );
}

export default FeatureProducts;
