import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'Services/API';
// import { TrendingList } from 'components/TrendingList/TrendingList';
// import { TrendingList } from "components/TrendingList/TrendingList";

// import { Container, Title} from './Home.styled';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const renderTrendingMovies = async () => {
      try {
        const trendingMovies = await getTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        console.log(error)
      }
    };
    renderTrendingMovies()
  }, []);
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>{movie.name}</li>
      ))}
    </ul>
  )
}

