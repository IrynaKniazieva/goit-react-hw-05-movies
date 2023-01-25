
import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'Services/API';
// import { TrendingList } from 'components/TrendingList/TrendingList';
import { Container, Titlle } from './Home.styled';
import { MoviesList } from 'components/MoviesList/MoviesList';


export const Home = () => {
  const [movies, setMovies] = useState([]);
  // const location = useLocation();

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
      <Titlle>Trending Today</Titlle>
      <MoviesList movies = {movies} />
    </Container>
  )
}

