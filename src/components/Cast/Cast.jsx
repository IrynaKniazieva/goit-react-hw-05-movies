import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'Services/API';
import { Container, Item } from './Cast.styled';

export const Cast = () => {
    const [cast, setCast] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        getCast(id).then(setCast);
    }, [id]);
    console.log(cast);
    if (cast.length === 0) {
        return "We don't have any cast information on this movie.";}

        return (
            <>
            <Container>
            {cast.map(({ profile_path, name, character, id }) => {
                return (
                    <Item key={id}>
                        <img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} alt={name}></img>
                        <p>{name}</p>
                        <p>Character: {character}</p>
                    </Item>
                    
                )
})}
            </Container>
            
            </>
        )
}