import { SearchMovie } from "components/SearchMovie/SearchMovie";
import { useSearchParams } from 'react-router-dom';
import { getSearch } from "Services/API"

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') ?? "";

  const changeFilter = value => {
    setSearchParams(value !== "" ? { filter: value } : {}); 
  }

  const visibleMovies = movies.filter(movie => movie.name)
    return (
      <main>
        <SearchMovie onChange={changeFilter}/>
      </main>
    );
  };