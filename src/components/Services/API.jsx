import axios from 'axios';

// const API_KEY = "8009629a1fea118cf1b1e37731fe7687"
axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.params = {
  api_key: '8009629a1fea118cf1b1e37731fe7687',
};


// список самых популярных фильмов на сегодня для создания коллекции на главной странице.
export const getTrendingMovies = async() => {
    const response = await axios.get(`/trending/movie/day`);
    return response.data.results;
  };


