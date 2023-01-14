import { Header, Link, Container} from 'components/App/App.styled';
import {  Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
      <Container>
        <Header>
          <nav>
            <Link to="/" end>
              Home
            </Link>
            <Link to="/movies">Movies</Link>
          </nav>
          <Outlet />
        </Header>
      </Container>
    );
}