import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";

export function useFeatureSearchProducts() {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [featureSearchList, setFeatureSearchList] = useState(() => ({
    data: {},
    isLoading: true,
  }));
  const urlParams = new URLSearchParams(window.location.search);
  const searchTerm = urlParams.get("q");
  const page = urlParams.get("page");


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
