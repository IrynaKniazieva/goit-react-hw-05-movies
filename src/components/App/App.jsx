import { Route, Routes } from "react-router-dom";

import { Home } from "../../../src/pages/Home/Home";
import { Movies } from "../../../src/pages/Movies/Movies";
import { NotFound } from "../../../src/pages/NotFound/NotFound";



export const App = () => {
  return (
    <div>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  </div>
  );
};