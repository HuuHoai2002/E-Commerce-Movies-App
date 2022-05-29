import { useEffect, useState } from "react";
import { serviceProducts } from "../services";

export default function useFetchingData(categories, page = 1) {
  const { getProducts } = serviceProducts();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getProducts(categories, page);
        response && setData(response.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    loading,
  };
}
