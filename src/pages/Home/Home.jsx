import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'Services/API';
import { Container, Titlle } from './Home.styled';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const renderTrendingMovies = async () => {
      try {
        const trendingMovies = await getTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        console.log(error);
      }
    };
    renderTrendingMovies();
  }, []);

  return (
    <Container>
      <Titlle>Trending Today</Titlle>
      <MoviesList movies={movies} />
    </Container>
  );
};

export default Home;