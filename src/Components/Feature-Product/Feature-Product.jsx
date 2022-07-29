import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/reducers/index";
import "./FeatureProduct.css";
import "../../App.css";
import { useFeaturedProducts } from "../../utils/hooks/useFeatutrProducts";
import LoadingSpiner from "../spiner/LoadingSpiner";
import { Link } from "react-router-dom";

function FeatureProducts() {
  const { isLoading, data } = useFeaturedProducts();
  const dispatch = useDispatch();
  const productsCart = useSelector((state) => state.cartProduct.CartProducts);

  return (
    <>
      <div className="App-container-title">
        <h1> PRODUCTS </h1>
      </div>
      <div className="product-container" data-testid="home-feature-product">
        {isLoading ? (
          <LoadingSpiner></LoadingSpiner>
        ) : (
          data.results.map((item) => {
            let productfound = productsCart.find(
              (itemCart) => itemCart.id === item.id
            );

            return (
              <div key={item.id} className="product-card" data-testid={`home-feature-product-${item.id}`}>
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
                  <button data-testid={`home-feature-product-add-${item.id}`}
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
          })
        )}
      </div>
    </>
  );
}

export default FeatureProducts;
