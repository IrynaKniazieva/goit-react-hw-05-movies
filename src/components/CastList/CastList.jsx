import { ImgCast, Item } from './CastList.styled';
import PropTypes from 'prop-types';
import NotFoto from '../Image/NotFoto.jpg';

export const CastList = ({ cast }) => {
  return (
    <div>
      {cast.map(({ profile_path, name, character, id }) => {
        return (
          <Item key={id}>
            <ImgCast
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                  : NotFoto
              }
              alt={name}
            ></ImgCast>

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
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};
