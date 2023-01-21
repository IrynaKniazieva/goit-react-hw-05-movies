import { SearchMovie } from "components/SearchMovie/SearchMovie";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { getSearch } from "Services/API"
// import { Link } from "react-router-dom";
import { TrendingList } from "components/TrendingList/TrendingList";

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  // const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? "";

  const onFormSubmit = e => {
    e.preventDefault();
    const searchTitleMovie = e.target.elements.query.value;
    setSearchParams ({query: searchTitleMovie})
  }

  useEffect(() => {
    if (!query) {
      return;
    }
    if (query.trim() === '') {
      alert ('Please enter the title for search!');
      return;
    }
    getSearch(query).then(setMovies);
  }, [query])


    return (
      <main>
        <SearchMovie  onSubmit={onFormSubmit}/>
        {/* <SearchMovie  submit={onFormSubmit} value={querySearch} onChange={changeQuery}/> */}

        {movies || movies.length !== 0 ? (
          <TrendingList movies = {movies} />
        ) : (<div>Not Found</div>)}
        
        {/* {visibleMovies.length > 0 && (
          <ul>
            {visibleMovies.map(movie => (
              <li key={movie.id}>
                <Link to={`${movie.id}`}>{movie.title}</Link>
                </li>
            ))}
          </ul>
        )} */}
      </main>
    );
  };