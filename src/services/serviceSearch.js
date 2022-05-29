import { api_key } from "../config/api/apiProducts";
import axiosClient from "./axiosClient";

const serviceSearch = () => {
  async function searchKeywords(params) {
    return await axiosClient.get(`/search/keyword?api_key=${api_key}`, {
      params,
    });
  }

  async function searchProducts(params) {
    return await axiosClient.get(`/search/movie?api_key=${api_key}`, {
      params,
    });
  }

  return { searchKeywords, searchProducts };
};

export default serviceSearch;
