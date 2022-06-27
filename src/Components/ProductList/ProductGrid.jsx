import React from "react";

function ProductGrid({ list }) {
  console.log(list);
  return (
    <>
      <div>
        <h1>This is the product list.</h1>
      </div>
      <div>
        {list.map((item) => {
          return (
            <div key={item.id}>
              <img
                src={item.data.mainimage.url}
                alt={item.data.mainimage.alt}
              ></img>
              <div>
                <p>{item.data.name}</p>
                <p>{item.data.category.slug}</p>
                <p>$ {item.data.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductGrid;
