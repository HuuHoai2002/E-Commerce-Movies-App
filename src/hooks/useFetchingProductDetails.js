import { useEffect, useState } from "react";
import { productsServices } from "../services";
import { setTitle } from "../utils";
import { getInfoProducts } from "../utils/products";

export default function useFetchingProductDetails(id) {
  const { getDiscount, getPrice, getRootPrice } = getInfoProducts();
  const { getProductsDetails } = productsServices();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getProductsDetails(id);
        const newResponse = {
          ...response,
          price: getPrice(response.vote_average, false),
          rootPrice: getRootPrice(response.vote_average, false),
          discount: getDiscount(response.vote_average),
          videosUrl: "",
        };
        newResponse && setData(newResponse);
        setTitle(newResponse.title || newResponse.name);
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
