import { useCallback, useEffect, useState } from "react";
import { serviceSearch } from "../services";

export default function useSearchProducts(keyword = "", language = "vi") {
  const { searchProducts } = serviceSearch();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const handleNextPage = useCallback(() => {
    setPage((page) => page + 1);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await searchProducts({
          query: keyword,
          language,
          page,
        });
        page !== 1
          ? setData((moviesPrev) => [...moviesPrev, ...response.results])
          : setData(response.results);
        setLoading(false);
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return {
    loading,
    data,
    handleNextPage,
  };
}
