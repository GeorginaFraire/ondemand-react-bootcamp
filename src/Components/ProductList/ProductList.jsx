import React, { useEffect, useState } from "react";
import {Products} from '../../mocks/products'
import "./SideBarCategory"
import SideBarCategory from "./SideBarCategory";
import ProductGrid from './ProductGrid'
import LoadingSpiner from "../spiner/LoadingSpiner";

function ProductList() {
  const [filters, setFilter] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState(Products.results)
  const [loadingSpiner,setLoadingSpiner]=useState(true)

  useEffect(()=>{
    console.log('timer')
    setTimeout(()=>{setLoadingSpiner(false)},2000);
  },[loadingSpiner])

  useEffect(()=>{
    setProductsFiltered(()=>{
      if(filters.length === 0 )
        return Products.results;
      else 
      return Products.results.filter(prod => filters.includes(prod.data.category.id))      
    })},[filters])

  const handleCategoryFilter = (e)=>{
    e.target.checked ? setFilter([...filters, e.target.value]): setFilter(filters.filter(c => c !== e.target.value))
  }

  return (
    <section>
      <div className="container">
        <SideBarCategory filter={handleCategoryFilter}></SideBarCategory>
        
        {loadingSpiner ?  <LoadingSpiner/> :
        (<ProductGrid list={productsFiltered}></ProductGrid>)}
      </div>
    </section>
  );
}
export default ProductList;
