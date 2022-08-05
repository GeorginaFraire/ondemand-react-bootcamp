import React from "react";
import Carousel from "../Components/Carousel/Carousel.jsx";
import Product from "../Components/ProductDetails/Product.jsx";
import LoadingSpiner from "../Components/spiner/LoadingSpiner.jsx";
import {useProduct} from "../utils/hooks/useProduct";

function ProductDetails() {
  const { isLoading, data } = useProduct();
  
  return (
    <div className="container">
      {isLoading ? (
        <LoadingSpiner></LoadingSpiner>
      ) : (
        <div style={{ marginBottom: "80px" }} data-testid={`product-${data.results[0].id}`}>
          <div className="App-container-title">
            <h1>{data.results[0].data.name}</h1>
          </div>
          <div className="grid-2-cols">
            <Carousel images={data.results[0].data.images}></Carousel>
            <div>
              <Product product={data}></Product>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;