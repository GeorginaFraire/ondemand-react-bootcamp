import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";
import { useSearchParams } from "react-router-dom";

export function useFeatureSearchProducts() {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [featureSearchList, setFeatureSearchList] = useState(() => ({
    data: {},
    isLoading: true,
  }));
  const [searchParams] = useSearchParams();
  
  const searchTerm = searchParams.get("q");
  const page = searchParams.get("page");

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getFeaturedProductsList() {
      try {
        setFeatureSearchList({ data: {}, isLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            `[[at(document.type, "product")]]`
          )}&q=${encodeURIComponent(
            `[[fulltext(document,"${searchTerm}")]]`
          )}&lang=en-us&pageSize=20${page ? `&page=${page}` : ""}`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setFeatureSearchList({ data, isLoading: false });
      } catch (err) {
        setFeatureSearchList({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getFeaturedProductsList();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return featureSearchList;
}
