
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetails } from 'Services/API';

export const MoviesDetails = () => {
  const [details, setDetails] = useState(null);
  const { id } = useParams();



// src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
