import { Route, Routes, } from "react-router-dom";
import { Layout } from "components/Layout/Layout";
import { NotFound } from "pages/NotFound/NotFound";
import { Home } from "pages/Home/Home";



export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="movies" element={<div>Movies</div>}/>
        {/* <Route path="movies/:movieId" element={<MovieDetails />}> */}
        <Route path=":movieId" element={<MovieDetails />}>
          <Route path="cast" element={<div>Cast</div>}/>
          <Route path="reviews" element={<div>Reviews</div>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
      
    </Routes>
  )
}

