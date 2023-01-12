import { Link } from "react-router-dom";
import { Container, CardWrapper, MovieName } from "../MoviesList/MoviesList.styled";

export const MoviesList = ({ movies }) => {
  return (
    <Container>
      {movies.map((movie) => (
        <CardWrapper key={movie.id}>
          <Link to={`${movie.id}`}>
            
            <MovieName>{movie.name}</MovieName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};


