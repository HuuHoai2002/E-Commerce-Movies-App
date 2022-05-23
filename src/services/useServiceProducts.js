import axios from "axios";
import { api_key, base_url } from "../config/apiConfig";

const useServiceProducts = () => {
  async function getMovies(category = "", page = 1, language = "vi") {
    return await (
      await axios.get(
        `${base_url}/movie/${category}?api_key=${api_key}&page=${page}&language=${language}`
      )
    ).data;
  }

  async function getMovieDetails(movieID, language = "vi") {
    return await (
      await axios.get(
        `${base_url}/movie/${movieID}?api_key=${api_key}&language=${language}`
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

  async function getTv(category = "", page = 1, language = "vi") {
    return await (
      await axios.get(
        `${base_url}/tv/${category}?api_key=${api_key}&page=${page}&language=${language}`
      )
    ).data;
  }

  async function getTvDetails(tvID, language = "vi") {
    return await (
      await axios.get(
        `${base_url}/tv/${tvID}?api_key=${api_key}&language=${language}`
      )
    ).data;
  }

  async function getTvContent(content, tvID, language = "vi") {
    return await (
      await axios.get(
        `${base_url}/tv/${tvID}/${content}?api_key=${api_key}&language=${language}`
      )
    ).data;
  }

  return {
    getMovies,
    getMovieDetails,
    getMovieContent,
    getTv,
    getTvDetails,
    getTvContent,
  };
};

export default useServiceProducts;
