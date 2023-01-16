
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'Services/API';
import { TrendingList } from 'components/TrendingList/TrendingList';
import { Container } from './Home.styled';

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
    <Container>
      <h1>Trending Today</h1>
      <TrendingList movies = {movies} />
    </Container>
  )
}

