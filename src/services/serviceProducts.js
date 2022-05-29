import axios from "axios";
import { api_key, base_url } from "../config/api/apiProducts";

const serviceProducts = () => {
  async function getProducts(category = "", page = 1, language = "vi") {
    return await (
      await axios.get(
        `${base_url}/movie/${category}?api_key=${api_key}&page=${page}&language=${language}`
      )
    ).data;
  }

  async function getProductsDetails(movieID, language = "vi", type = "movie") {
    return await (
      await axios.get(
        `${base_url}/${type}/${movieID}?api_key=${api_key}&language=${language}`
      )
    ).data;
  }

  async function getProductsContent(content, movieID, language = "vi") {
    return await (
      await axios.get(
        `${base_url}/movie/${movieID}/${content}?api_key=${api_key}&language=${language}`
      )
    ).data;
  }

  return {
    getProducts,
    getProductsDetails,
    getProductsContent,
  };
};

export default serviceProducts;
