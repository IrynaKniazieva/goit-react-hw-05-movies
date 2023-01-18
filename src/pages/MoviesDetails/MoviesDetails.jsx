// import { useFetchMovie } from "hooks/useFetchMovie";

// export const MoviesDetails = () => {
//     const movie = useFetchMovie();

//     return (

//        <>
//        {movie && (
//         <div>
//             <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=''></img>
//             <h2>{movie.title}</h2>
//         </div>
//        )}

//        </>
//     )
// }
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetails } from 'Services/API';

export const MoviesDetails = () => {
  const [details, setDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getDetails(id).then(setDetails);
  }, [id]);

      return (

       <>
       {movie && (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=''></img>
            <h2>{movie.title}</h2>
        </div>
       )}

       </>
  
};

// export const MoviesDetails = () => {
//     const [movie, setMovie] = useState(null);
//     const {id} = useParams();
//     // const location = useLocation();

//     useEffect(() => {
//         getMovieId(id).then(setMovie);
//     }, [id]);

//     return (
//        <>
//        {movie && (
//         <div>
//             <h2>{movie.title}</h2>
//         </div>
//        )}

//        </>
//     )
// }
