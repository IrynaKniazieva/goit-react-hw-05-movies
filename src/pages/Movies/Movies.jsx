import { SearchMovie } from "components/SearchMovie/SearchMovie";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { getSearch } from "Services/API"
import { MoviesList } from "components/MoviesList/MoviesList";

export const Movies = () => {
  const [movies, setMovies] = useState ([]);
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
    getSearch(query).then(setMovies);
  }, [query])


    return (
      <main>
        <SearchMovie  onSubmit={onFormSubmit}/>
        {movies && <MoviesList movies={movies}/>}
      </main>
    );
  };