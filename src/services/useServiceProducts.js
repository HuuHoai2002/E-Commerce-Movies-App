import axios from "axios";
import { api_key, base_url } from "../config/api/apiProducts";

const useServiceProducts = () => {
  async function getMovies(category = "", page = 1, language = "vi") {
    return await (
      await axios.get(
        `${base_url}/movie/${category}?api_key=${api_key}&page=${page}&language=${language}`
      )
    ).data;
  }

  async function getMovieDetails(movieID, language = "vi", type = "movie") {
    return await (
      await axios.get(
        `${base_url}/${type}/${movieID}?api_key=${api_key}&language=${language}`
      )
    ).data;
  }

  async function getMovieContent(content, movieID, language = "vi") {
    return await (
      await axios.get(
        `${base_url}/movie/${movieID}/${content}?api_key=${api_key}&language=${language}`
      )
    ).data;
  }

  return {
    getMovies,
    getMovieDetails,
    getMovieContent,
  };
};

export default useServiceProducts;
