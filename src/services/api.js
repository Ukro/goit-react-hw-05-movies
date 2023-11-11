import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '6ed3fa3d24c2aaae4e7274db70c163cc';

const fetchTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

const fetchSearchByKeyword = async keyword => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${keyword}`
  );
  return response.data.results;
};

const fetchMovieDetalis = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

const fetchActors = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

const fetchReviews = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};

const api = {
  fetchTrending,
  fetchSearchByKeyword,
  fetchMovieDetalis,
  fetchActors,
  fetchReviews,
};

export default api;
