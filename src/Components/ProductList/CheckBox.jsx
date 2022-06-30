import React from "react";

function CheckBox({categoryID, categoryName, isChecked, filterOnClick}){ 
  return (
    <div>
      <input type="checkbox" 
        value={categoryID}
        defaultChecked={isChecked}
        onClick={filterOnClick} 
        />
        {categoryName}
    </div>
  );
}

export default CheckBox;