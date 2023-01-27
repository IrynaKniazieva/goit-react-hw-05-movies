import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Container, ItemMovie, LinkMovie, ImgMovie, TitlleMovie } from "./MoviesList.styled";

export const MoviesList = ({ movies }) => {
 const location = useLocation();

  return (
    <Container>  
      {movies.map(({title, id, poster_path}) => (
        <ItemMovie key={id}>

          <LinkMovie to={`/movies/${id}`} state={{ from: location }}>
          <ImgMovie src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} width="200"/>
          <TitlleMovie>{title}</TitlleMovie>
          
          </LinkMovie>
        </ItemMovie>
        
      ))}
      <Suspense fallback={<div>Loading...</div>}>
      <Outlet/>
      </Suspense>
      
    </Container>
  );
};