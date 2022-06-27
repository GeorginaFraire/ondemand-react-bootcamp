import React from "react";
import "../Feature-Product/FeatureProduct.css";

function ProductGrid({ list }) {
  return (
    <div style={{marginLeft:'20%'}}>
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
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductGrid;
