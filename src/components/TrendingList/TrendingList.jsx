import { useLocation } from "react-router-dom";
import { Container, ItemMovie, LinkMovie } from "./TrendingList.styled";

export const TrendingList = ({ movies }) => {
 const location = useLocation();

  return (
    <Container>  
      {movies.map(({original_title, id}) => (
        <ItemMovie key={id}>
          <LinkMovie to={`/movies/${id}`} state={{ from: location }}>
          {original_title}
          </LinkMovie>
        </ItemMovie>
      ))}
    </Container>
  );
};


