import React, { useEffect, useState } from "react";
import { Products } from "../mocks/products";
import "../Components/ProductList/SideBarCategory";
import SideBarCategory from "../Components/ProductList/SideBarCategory";
import ProductGrid from "../Components/ProductList/ProductGrid";
import LoadingSpiner from "../Components/spiner/LoadingSpiner";
import PaginationControls from "../Components/Pagination-Controls/pagination-controls";

function ProductList() {
  const [filters, setFilter] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState(Products.results);
  const [loadingSpiner, setLoadingSpiner] = useState(true);

  useEffect(() => {
    console.log("timer");
    setTimeout(() => {
      setLoadingSpiner(false);
    }, 2000);
  }, [loadingSpiner]);

  useEffect(() => {
    setProductsFiltered(() => {
      if (filters.length === 0) return Products.results;
      else
        return Products.results.filter((prod) =>
          filters.includes(prod.data.category.id)
        );
    });
  }, [filters]);

  const handleCategoryFilter = (e) => {
    e.target.checked
      ? setFilter([...filters, e.target.value])
      : setFilter(filters.filter((c) => c !== e.target.value));
  };

  return (
    <section>
      <div className="container">
        <SideBarCategory filter={handleCategoryFilter}></SideBarCategory>
        {loadingSpiner ? (
          <LoadingSpiner />
        ) : (
          <>
          <PaginationControls></PaginationControls>
          <ProductGrid list={productsFiltered}></ProductGrid>
          </>
        )}
      </div>
    </section>
  );
}
export default ProductList;
