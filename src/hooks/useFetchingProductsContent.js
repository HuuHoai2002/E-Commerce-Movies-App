import { useEffect, useState } from "react";
import { productsServices } from "../services";

export default function useFetchingContent(id, contents, language = "en") {
  const { getProductsContent } = productsServices();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getProductsContent(contents, id, language);
        response && setData(response.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return {
    data,
    loading,
  };
}
