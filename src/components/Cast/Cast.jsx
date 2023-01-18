import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'Services/API';

export const Cast = () => {
    const [cast, setCast] = useState();
    const {id} = useParams

    useEffect(() => {
        getCast(id).then(setCast);
    }, [id]);
    if (cast.length === 0) {
        return "We don't have any cast information on this movie.";}

        return (
            <>
            
            </>
        )
}