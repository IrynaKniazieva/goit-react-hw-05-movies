import { Outlet, useLocation } from "react-router-dom";
import { Container, ItemMovie, LinkMovie } from "./TrendingList.styled";

export const TrendingList = ({ movies }) => {
 const location = useLocation();

  return (
    <Container>  
      {movies.map(({title, id, poster_path}) => (
        <ItemMovie key={id}>
          <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} width="100"></img>
          <LinkMovie to={`/movies/${id}`} state={{ from: location }}>
          {title}
          </LinkMovie>
        </ItemMovie>
        
      ))}
      <Outlet/>
    </Container>
  );
};


