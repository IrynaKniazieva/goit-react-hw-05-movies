import { useFetchMovie } from "hooks/useFetchMovie";

export const MovieDetails = () => {
    const movie = useFetchMovie();

    return (
        <h2>{movie.title}</h2>
    )
}