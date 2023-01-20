
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getDetails } from 'Services/API';
import { Link } from 'react-router-dom';

export const MoviesDetails = () => {
  const [details, setDetails] = useState(null);
  const { id } = useParams();

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
    <button>Go back</button>
    <h2>{details.title} ({date()})</h2>
    <p>User Score: {userScore()}%</p>
    <h3>Overview</h3>
    <p>{details.overview}</p>
    <h3>Movie Genres:</h3>
    <p>{genres()}</p>
   
    <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} alt={details.title} width="300"></img>
  </div>
  
)}
<div>
  <ul>
    <li>
    <Link to="cast">Cast</Link>
    </li>
    <li>
    <Link to="reviews">Reviews</Link>
    </li>
  </ul>
  <Outlet />
</div>


</>
)

}


// src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
