import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const API = {
  BASE_URL: 'https://api.themoviedb.org/3/',
  API_KEY: 'a0a346c810a8c3392ff6f3a908f46de3',
  URL_TRENDING: 'trending/movie/day',
  URL_SEARCH: 'search/movie',
  query: [],
  movieId: '',

  setQuery(query) {
    API.query = query;
  },

  setMovieId(movieId) {
    API.movieId = movieId;
  },

  resetQuery() {
    API.query = '';
  },

  async addMaterial() {
    const url = `${this.BASE_URL}${this.URL_TRENDING}?api_key=${this.API_KEY}`;
    const response = await axios.get(url);
    return response.data.results;
  },

  async searchMovie() {
    const urlSearch = `${this.BASE_URL}${this.URL_SEARCH}?query=${this.query}&api_key=${this.API_KEY}`;
    const response = await axios.get(urlSearch);
    return response.data.results;
  },

  async getDetails() {
    const urlDetails = `${this.BASE_URL}movie/${this.movieId}?api_key=${this.API_KEY}`;
    const response = await axios.get(urlDetails);
    return response.data;
  },

  async getCast() {
    const urlCast = `${this.BASE_URL}movie/${this.movieId}/credits?api_key=${this.API_KEY}`;
    const response = await axios.get(urlCast);
    return response.data.cast;
  },
};
