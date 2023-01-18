import { Route, Routes, } from "react-router-dom";
import { Layout } from "components/Layout/Layout";
import { NotFound } from "pages/NotFound/NotFound";
import { Home } from "pages/Home/Home";
import { MoviesDetails } from "pages/MoviesDetails/MoviesDetails";



export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="movies" element={<div>Movies</div>}/>
        <Route path="movies/:id" element={<MoviesDetails />}>
        {/* <Route path=":movieId" element={<MoviesDetails />}> */}
          <Route path="cast" element={<div>Cast</div>}/>
          <Route path="reviews" element={<div>Reviews</div>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
      
    </Routes>
  )
}

