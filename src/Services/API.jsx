import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '8009629a1fea118cf1b1e37731fe7687',
};
// первый вариант
// список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// export const getTrendingMovies = async() => {
//     const response = await axios.get(`/trending/movie/day`);
//     return response.data.results;
//   };


// запит варіант як в додатковому уроці
// список самых популярных фильмов на сегодня для создания коллекции на главной странице.
export async function getTrendingMovies() {
  const response = await axios.get(`trending/movie/day`);
  return response.data.results;
}

// запрос полной информации о фильме для страницы кинофильма. 
export async function getDetails(id) {
  const response = await axios.get(`movie/${id}`)
  return response.data;
}

// запрос информации о актёрском составе для страницы кинофильма.
export async function getCast(id) {
  const response = await axios.get(`/movie/${id}/credits`)
  return response.data.cast;
}

// запрос обзоров для страницы кинофильма.
export async function getReviews(id) {
  const response = await axios.get(`/movie/${id}/reviews`)
  return response.data.results;
}

// поиск кинофильма по ключевому слову на странице фильмов.
export async function getSearch(query) {
  // const response = await axios.get(`/movie/search`)
  const response = await axios.get(`/search/movie?query=${query}`)
return response.data.results; 
}
