import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.ul`
padding-left: 15px;
`;

export const ItemMovie = styled.li`
:not(:last-child) {
  margin-bottom: 10px;
}
`;

export const LinkMovie = styled(Link)`
font-size: 15px;
color: black;
:hover {
   color: blue;
}
`;