import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchServices } from "../services";

export default function useSearchProducts(keyword = "", language = "vi") {
  const { searchProducts } = searchServices();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [params] = useSearchParams();
  const pathname = params.get("keyword");

  const handleNextPage = useCallback(() => {
    setPage((page) => page + 1);
  }, []);

  useEffect(() => {
    if (page > 1) {
      setData([]);
      setPage(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

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
      } catch (error) {
        console.log("Error: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, keyword]);

  return {
    loading,
    data,
    handleNextPage,
  };
}
