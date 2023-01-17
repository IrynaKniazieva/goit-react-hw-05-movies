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

export async function getMovieId(id) {
  const response = await axios.get(`movie/${id}`)
  return response.data.results;
}
