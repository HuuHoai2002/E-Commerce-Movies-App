import { useCallback, useEffect, useState } from "react";
import { serviceProducts } from "../services";

export default function useFetchingDataWithLoadMore(Categories) {
  //api
  const { getProducts } = serviceProducts();
  //data
  const [data, setData] = useState([]);
  //active
  const [categoryActive, setCategoryActive] = useState(0);
  //page
  const [page, setPage] = useState(1);
  //loading
  const [loading, setLoading] = useState(true);

  const handleChangeCategory = (index) => {
    if (index === categoryActive) return;
    setCategoryActive(index);
    setData([]);
    setPage(1);
  };

  const handleNextPage = useCallback(() => {
    setPage((page) => page + 1);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getProducts(Categories[categoryActive], page);
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
  }, [page, categoryActive]);

  return {
    loading,
    data,
    handleChangeCategory,
    handleNextPage,
    categoryActive,
  };
}
