import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { getDetails } from 'Services/API';
import { Link } from 'react-router-dom';
import {
  
  Container,
  ContainerAdditionalInfo,
  ContainerInfo,
  ImgMovie,
  TextAddition,
  TextDetails,
  Titlle,
  TitlleDetails,
} from './MoviesDetails.styled.';

const MoviesDetails = () => {
  const [details, setDetails] = useState(null);
  const { id } = useParams();
  // const navigate = useNavigate();
  const location = useLocation();
  const cameBack = location.state?.from ?? '/';
  console.log(location);

  useEffect(() => {
    getDetails(id).then(setDetails);
  }, [id]);

  console.log(details);

  const date = () => new Date(`${details.release_date}`).getFullYear();
  const userScore = () => Math.round(`${details.vote_average}`);
  const genres = () => details.genres.map(genre => genre.name).join(', ');

  return (
    <>
      {details && (
        <div>
          
          <Link to={cameBack}>&#60; Go back</Link>
          {/* <Button
            onClick={() => navigate(location?.state?.from ?? '/')}
            type="button"
          >
            {' '}
            &#60; Go back
          </Button> */}
          <Container>
            <ImgMovie
              src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
              alt={details.title}
              width="250"
            />
            <ContainerInfo>
              <Titlle>
                {details.title} ({date()})
              </Titlle>
              <TextDetails>User Score: {userScore()}%</TextDetails>
              <TitlleDetails>Overview</TitlleDetails>
              <TextDetails>{details.overview}</TextDetails>
              <TitlleDetails>Movie Genres:</TitlleDetails>
              <TextDetails>{genres()}</TextDetails>
            </ContainerInfo>
          </Container>
        </div>
      )}
      <ContainerAdditionalInfo>
        <TextAddition>Additional Information</TextAddition>

        <ul>
          <li>
            <Link to="cast" state={{ from: cameBack }}>Cast</Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: cameBack }}>Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading ...</div>}>
          <Outlet />
        </Suspense>
      </ContainerAdditionalInfo>
    </>
  );
};

export default MoviesDetails;
