import { Route, Routes, } from "react-router-dom";
import { Layout } from "components/Layout/Layout";

import { Home } from "../../../src/pages/Home/Home";
import { Movies } from "../../../src/pages/Movies/Movies";
import { NotFound } from "../../../src/pages/NotFound/NotFound";




export const App = () => {
  return (  
     <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<div>Home</div>} />
        <Route path="movies" element={<div>Movies</div>} />
        <Route path="movies/:movieId" element={<div>Detals</div>}>
          <Route path="cast" element={<div>Cast</div>}/>
          <Route path="reviews" element={<div>Reviews</div>}/>
        <Route/>
        <Route path="*" element={<NotFound />} />
      </Route>
      </Routes>
  );
};