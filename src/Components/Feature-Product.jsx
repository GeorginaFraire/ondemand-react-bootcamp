import React from "react";
import { Products } from "../mocks/featured-products";
import '../styles/css/FeatureProduct.css';
import '../App.css'

function FeatureProducts() {
  return (
    <>
      <div className="App-container-title">
        <h1> PRODUCTS </h1>
      </div>
      <div className="product-container">
        {Products.results.map((item, itemIndex) => {
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
                <p> {item.data.short_description}</p>
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
