import { useEffect, useState } from "react";
import { useServiceProducts } from "../services";

export default function useFetchingDataWithContent(
  id,
  contents,
  language = "en"
) {
  const { getMovieContent } = useServiceProducts();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getMovieContent(contents, id, language);
        response && setData(response.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
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
