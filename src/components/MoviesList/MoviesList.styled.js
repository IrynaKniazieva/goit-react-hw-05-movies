import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.ul`
display: grid;
    max-width: calc(100vw - 25px);
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    padding-top: 15px;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
`;

export const ItemMovie = styled.li`


`;

export const ImgMovie = styled.img`
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
:hover {
  transform: scale(1.03);
    cursor: zoom-in;
}
`;

export const LinkMovie = styled(Link)`
display: flex;
flex-direction: column;
align-items: center;
text-decoration: none;
color: black;
:hover {
   color: orangered;
}
`;

export const TitlleMovie = styled.h2`
margin: 10px 0;
font-size: 15px;
`;