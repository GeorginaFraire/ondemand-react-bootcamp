import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Components/ProductList/SideBarCategory";
import SideBarCategory from "../Components/ProductList/SideBarCategory";
import ProductGrid from "../Components/ProductList/ProductGrid";
import LoadingSpiner from "../Components/spiner/LoadingSpiner";
import PaginationControls from "../Components/Pagination-Controls/pagination-controls";
import { useFeaturedProductsList } from "../utils/hooks/useFeatureProductList";

function ProductList() {
  const [filters, setFilter] = useState([]);
  const {isLoading, data} = useFeaturedProductsList();
  let navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category");
  let categories = '';

  useEffect(() => {
    if (category !== null) {
      setFilter([...filters, ...category.split(",")]);
    }
  },[]);

  const handleCategoryFilter = (e) => {
    e.target.checked
      ? setFilter([...filters, e.target.value])
      : setFilter(filters.filter((c) => c !== e.target.value));

    changeUrl(e.target.value, e.target.checked);
  };

  const changeUrl = (category, checked) => {
    categories = filters.join(",")
    if(checked){
      categories +=  filters.length > 0 ? `,${category}`: category
    }
    else{  
      categories = categories.replace(category, '').replace(',,', ','); 
    }
    categories = categories.startsWith(',') ? categories.substring(1) : categories; 
    let cat_url = categories.length > 0 ? `/products?category=${categories}` : '/products';
    navigate(cat_url, {replace: true});
    navigate(0);
  }

  const handleSearchPage = (page) => {
    const page_url = new URL(window.location.href)
    page_url.searchParams.set('page', page.toString())
    navigate(`${page_url.pathname}${page_url.search}`)
    navigate(0);    
  }

  const handleClearFilters = () => {
    setFilter([]);
    document.querySelectorAll('input[type=checkbox]').forEach( el => el.checked = false );
    navigate("/products", {replace: true});
    navigate(0);
  }

  return (
    <section>
      <div className="container">
        <SideBarCategory
          filterOnClick={handleCategoryFilter}
          category={category}
          clearOnClick={handleClearFilters}
          filtros={filters}
        ></SideBarCategory>
        {isLoading ? (
          <LoadingSpiner />
        ) : (
          <div style={{marginLeft:'20%'}}>
            <PaginationControls
            currentPage = {data.page}
            totalPages = {data.total_pages}
            pageSize ={data.results_size}
            onPageChange={handleSearchPage}
            ></PaginationControls> 
            <ProductGrid list={data.results}></ProductGrid>
          </div>
        )}
      </div>
    </section>
  );
}
export default ProductList;
