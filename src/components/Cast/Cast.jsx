import { CastList } from 'components/CastList/CastList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'Services/API';
import { Container } from './Cast.styled';


const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getCast(id).then(setCast);
  }, [id]);

  console.log(cast);

  return (
    <Container>
      {cast.length !== 0 ? (
        <CastList cast={cast} />
      ) : (
        <p>We don't have any cast information on this movie.</p>
      )}
    </Container>
  );
};

export default Cast;
