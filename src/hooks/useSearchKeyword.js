import { useEffect, useState } from "react";
import { searchServices } from "../services";

export default function useSearchKeyword(keyword = "", language = "vi") {
  const { searchKeywords } = searchServices();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await searchKeywords({
          query: keyword,
          language,
        });
        response && setData(response.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (keyword) {
      fetchData();
    } else {
      setData([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  return {
    data,
    loading,
  };
}
