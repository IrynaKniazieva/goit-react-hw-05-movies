import { Item } from "./CastList.styled";

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
    )
 
};
