import React from "react";
import "./ProductList.css";
import { Categories } from "../../mocks/product-categories";
import PropTypes from "prop-types";

function SideBarCategory({ filter, category }) {

  return (
    <div className="sideBar">
      {Categories.results.map((item) => {
        return (
          <div key={item.id}>
            <input
              type="checkbox"
              onClick={filter}
              value={item.id}
              name={item.data.name}
              defaultChecked={category === item.id}
            />
            {item.data.name}
          </div>
        );
      })}
    </div>
  );
}

SideBarCategory.prototype = {
  filter: PropTypes.func,
  category: PropTypes.string,
};

export default SideBarCategory;
