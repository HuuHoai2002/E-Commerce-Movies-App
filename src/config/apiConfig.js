const api_key = process.env.REACT_APP_MOVIE_API_KEY;
const base_url = process.env.REACT_APP_MOVIE_BASE_URL;
const image_url_original = "https://image.tmdb.org/t/p/original";
const image_url_with_size =
  "https://image.tmdb.org/t/p/whttps://image.tmdb.org/t/p/w342";

const categories = {
  POPULAR: "popular",
  NOW_PLAYING: "now_playing",
  TOP_RATED: "top_rated",
  UP_COMING: "upcoming",
  ON_THE_AIR: "on_the_air",
  AIRING_TODAY: "airing_today",
};

const contents = {
  CREDITS: "credits",
  SIMILAR: "similar",
  REVIEWS: "reviews",
  IMAGES: "images",
  RECOMENTDATIONS: "recommendations",
};

export {
  api_key,
  base_url,
  categories,
  contents,
  image_url_original,
  image_url_with_size,
};
