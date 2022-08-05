/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useFeaturedProductsList() {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [categories, setCategories] = useState(''); 
  const [featuredProductsList, setFeaturedProductsList] = useState(() => ({
    data: {},
    isLoading: true,
  }));
  const urlParams = new URLSearchParams(window.location.search);
  const parms = urlParams.get("category");
  const page = urlParams.get("page");
  useEffect(()=>{
    if(parms){

      let category_array_in_string = "";
      parms.split(',').forEach((category)=> 
        category_array_in_string += `"${category}",`
      );
      category_array_in_string = category_array_in_string.endsWith(',') ? category_array_in_string.slice(0, -1) : category_array_in_string;
      setCategories(category_array_in_string);
    }
  },[])


  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();
   
    
    async function getFeaturedProductsList() {
      try {
        setFeaturedProductsList({ data: {}, isLoading: true });
        const base_url = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=`
        const complete_url = categories.length > 0 ?  `${base_url}${encodeURIComponent(`[[any(my.product.category,[${categories}])]]`)}`: `${base_url}${encodeURIComponent('[[at(document.type, "product")]]')}`;
      
        const response = await fetch(
          `${complete_url}&lang=en-us&pageSize=12${page ? `&page=${page}` : ''}`,{
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setFeaturedProductsList({ data, isLoading: false });
      } catch (err) {
        setFeaturedProductsList({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getFeaturedProductsList();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);
  
  return featuredProductsList;
}
