
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetails } from 'Services/API';

export const MoviesDetails = () => {
  const [details, setDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getDetails(id).then(setDetails);
}, [id]);

console.log(details);

return (
<>
{details && (
  <div>
    <h2>{details.title}{details.release_date}</h2>
    <h3>Overview</h3>
    <p>{details.overview}</p>
   
    <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} alt={details.title}></img>
  </div>
)}
</>
)

}


// src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
