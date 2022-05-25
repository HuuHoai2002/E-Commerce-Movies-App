import { api_key } from "../config/apiConfig";
import axiosClient from "./axiosClient";

const useServiceSearch = () => {
  async function searchMovie() {}

  async function searchKeywords(params) {
    return await axiosClient.get(`/search/multi?api_key=${api_key}`, {
      params,
    });
  }

  return { searchMovie, searchKeywords };
};

export default useServiceSearch;
