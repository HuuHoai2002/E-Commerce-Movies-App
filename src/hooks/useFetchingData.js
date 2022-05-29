import { useEffect, useState } from "react";
import { useServiceProducts } from "../services";

export default function useFetchingData(categories, page = 1) {
  const { getMovies } = useServiceProducts();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getMovies(categories, page);
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
