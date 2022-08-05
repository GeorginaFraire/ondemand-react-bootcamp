import React from "react";
import "./ProductList.css";
//import { Categories } from "../../mocks/product-categories";
import PropTypes from "prop-types";
import { useFeatureCategory } from "../../utils/hooks/useFeatureCategoryGrid";
import LoadingSpiner from "../spiner/LoadingSpiner";
import CheckBox from "./CheckBox";


function SideBarCategory({ filterOnClick,clearOnClick, filtros}) {
  const { isLoading, data } = useFeatureCategory();

  return (
    <div className="sideBar" data-testid="product-list-sidebar">
      {isLoading? <LoadingSpiner></LoadingSpiner> : data.results.map((item, index) => {
        return (
          <div key={item.id} data-testid={`product-list-sidebar-${index}`}>
            <CheckBox 
            categoryID = {item.id}
            categoryName = {item.data.name}
            isChecked = {filtros.includes(item.id)}
            filterOnClick = {filterOnClick}
            ></CheckBox>
          </div>
        );
      })}
        <button onClick={clearOnClick}>Clear filters</button>
    </div>
  );
}

SideBarCategory.prototype = {
  filterOnClick: PropTypes.func,
  clearOnClick: PropTypes.func,
  filtros: PropTypes.array,
};

export default SideBarCategory;
