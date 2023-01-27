import { Item } from './CastList.styled';
import PropTypes from 'prop-types';

export const CastList = ({ cast }) => {
  return (
    <div>
      {cast.map(({ profile_path, name, character, id }) => {
        return (
          <Item key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
              alt={name}
            ></img>
            <p>{name}</p>
            <p>Character: {character}</p>
          </Item>
        );
      })}
    </div>
  );
};

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};
