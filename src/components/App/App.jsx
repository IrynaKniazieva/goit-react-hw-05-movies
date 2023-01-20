import { Route, Routes, } from "react-router-dom";
import { Layout } from "components/Layout/Layout";
import { NotFound } from "pages/NotFound/NotFound";
import { Home } from "pages/Home/Home";
import { MoviesDetails } from "pages/MoviesDetails/MoviesDetails";
import { Cast } from "components/Cast/Cast";
import { Reviews } from "components/Reviews/Reviews";
import { Movies } from "pages/Movies/Movies";


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="movies" element={<Movies />}/>
        <Route path="movies/:id" element={<MoviesDetails />}>
        {/* <Route path=":movieId" element={<MoviesDetails />}> */}
          <Route path="cast" element={<Cast />}/>
          <Route path="reviews" element={<Reviews />}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
      
    </Routes>
  )
}

