import { Header, Link, Container } from './Layout.stuled';
import {  Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
      <Container>
        <Header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="movies">Movies</Link>
          </nav>
          
        </Header>
        <Outlet />
      </Container>
    );
}