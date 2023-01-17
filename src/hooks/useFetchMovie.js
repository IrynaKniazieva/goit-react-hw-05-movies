import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieId } from "Services/API";

export const useFetchMovie = () => {
    const [movie, setMovie] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        getMovieId(id).then(setMovie);
    }, [id]);

    return movie;
    
}