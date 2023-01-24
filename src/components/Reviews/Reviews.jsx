import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'Services/API';

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        getReviews(id).then(setReviews);
    }, [id]);

    if (reviews.length ===0) {
        return "We don't have any reviews for this movie."
    }

    return (
        <>
        <ul>
        {reviews.map(({author, content, id}) => {
            return (
                <li key={id}>
                    <h3>Author:{author}</h3>
                    <p>{content}</p>
                </li>
                

            )
        })}

        </ul>

        </>
    )
}