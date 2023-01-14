import { Route, Routes, } from "react-router-dom";

import { Home } from "../../../src/pages/Home/Home";
import { Movies } from "../../../src/pages/Movies/Movies";
import { NotFound } from "../../../src/pages/NotFound/NotFound";
import { Container, Header, Logo, Link } from "../App/App.styled";
// import { MoviesDetails } from "../../pages/MoviesDetails/MoviesDetails"



export const App = () => {
  return (
    <Container>
      <Header>
        <Logo>
          Movi
        </Logo>
        <nav>
        <Link to="/" end>Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      </Header>
       
       
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/movies/:movieId" element={<MoviesDetails />} />
      </Routes>
    </Container>
  
  
  );
};