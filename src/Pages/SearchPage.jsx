import React from "react";
import { useNavigate } from "react-router-dom";
import ProductGrid from "../Components/ProductList/ProductGrid.jsx";
import PaginationControls from "../Components/Pagination-Controls/pagination-controls.jsx";
import { useFeatureSearchProducts } from "../utils/hooks/useSearchProducts";

function SearchPage() {
  const { isLoading, data } = useFeatureSearchProducts();
  let navigate = useNavigate();

  const handleSearchPage = (page) => {
    const page_url = new URL(window.location.href)
    page_url.searchParams.set('page', page.toString())
    navigate(`${page_url.pathname}${page_url.search}`)
    navigate(0);    
  }

  return (
    <div className="container">
      <h1>Search Page</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
         data.results.length > 0 ?
        (
          <>
            <PaginationControls
              currentPage={data.page}
              totalPages={data.total_pages}
              pageSize={data.results_size}
              onPageChange={handleSearchPage}
            ></PaginationControls>
            <ProductGrid list={data.results} showTitle={false}></ProductGrid>
          </>
        ):
        <h1>Sorry <span role="img" aria-label="sad-face">😭</span>! We couldn't find any products.</h1>
        )
      }
    </div>
  );
}

export default SearchPage;
