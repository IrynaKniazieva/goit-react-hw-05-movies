import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import {
  Container,
  ItemMovie,
  LinkMovie,
  ImgMovie,
  TitlleMovie,
} from './MoviesList.styled';
import NotFoto from '../Image/NotFoto.jpg';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <Container>
      {movies.map(({ title, id, poster_path }) => (
        <ItemMovie key={id}>
          <LinkMovie to={`/movies/${id}`} state={{ from: location }}>
            <ImgMovie
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w200/${poster_path}`
                  : NotFoto
              }
              alt={title}
              width="200"
            />
            <TitlleMovie>{title}</TitlleMovie>
          </LinkMovie>
        </ItemMovie>
      ))}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ),
};
