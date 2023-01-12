import { useParams } from "react-router-dom";

export const MoviesDetails = () => {
    const { id} = useParams();
    return <div>
        Зараз показує фільм з id - {id}
    </div>
};