import React from "react";
//import { Feature_Products } from "../../mocks/featured-products";
import "./FeatureProduct.css";
import "../../App.css";
import { useFeaturedProducts } from "../../utils/hooks/useFeatutrProducts";
import LoadingSpiner from "../spiner/LoadingSpiner";

function FeatureProducts() {
  const { isLoading, data } = useFeaturedProducts();
  console.log("isLoading - ", isLoading);
  console.log("data - ", data);
  return (
    <>
      <div className="App-container-title">
        <h1> PRODUCTS </h1>
      </div>
      <div className="product-container">
        {isLoading ? (
          <LoadingSpiner></LoadingSpiner>
        ) : (
          data.results.map((item, itemIndex) => {
            return (
              <div key={item.id} className="product-card">
                <div className="product-card-img">
                  <img
                    src={item.data.mainimage.url}
                    alt={item.data.mainimage.alt}
                  />
                </div>
                <div className="product-card-title">
                  <h5>{item.data.name}</h5>
                </div>
                <div className="product-card-content">
                  <p className="category">
                    {item.data.category.slug.toUpperCase()}
                  </p>
                  <p>${item.data.price}</p>
                </div>
                <div className="product-card-footer">
                 <button>Add to cart</button>
                 <button>details</button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default FeatureProducts;
