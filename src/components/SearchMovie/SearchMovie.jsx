import { Container } from './SearchMovie.styled';
import PropTypes from 'prop-types';

export const SearchMovie = ({ onSubmit }) => {
  return (
    <Container>
      <form onSubmit={onSubmit}>
        <input name="query" type="text"></input>
        <button type="submit">Search</button>
      </form>
    </Container>
  );
};

SearchMovie.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
