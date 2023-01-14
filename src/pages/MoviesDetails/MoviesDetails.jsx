import { useParams } from "react-router-dom";

export const MoviesDetails = () => {
    const { movieId } = useParams();
    return <div>
        Зараз показує фільм з id - {movieId}
    </div>
};