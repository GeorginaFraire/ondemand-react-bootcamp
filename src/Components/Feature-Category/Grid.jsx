import React from "react";
import "./GridCategory.css";
import "../../App.css";
import { useFeatureCategory } from "../../utils/hooks/useFeatureCategoryGrid";
import LoadingSpiner from "../spiner/LoadingSpiner";
import { Link } from "react-router-dom";

function GridCategory() {
  const { isLoading, data } = useFeatureCategory();

  return (
    <>
      <div className="App-container-title">
        <h1> CATEGORIES </h1>
      </div>
      <div className="grid-container"  data-testid="home-feature-category">
        {isLoading ? (
          <LoadingSpiner />
        ) : (
          data.results.map((item, itemIndex) => {
            return (
              <div key={item.id} className="grid-card" data-testid={`home-feature-category-${item.data.name}`}>
                <Link to={`/products?category=${item.id}`}>
                  <img
                    className="grid-img"
                    src={item.data.main_image.url}
                    alt={item.data.main_image.alt}
                  />
                  <div className="grid-title">
                    <h1>{item.data.name}</h1>
                  </div>
                </Link>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default GridCategory;
