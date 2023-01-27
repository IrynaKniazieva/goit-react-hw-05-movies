import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'Services/API';
import { Container } from './Reviews.styled';
import { ReviewsList } from 'components/ReviewsList/RevievsList';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getReviews(id).then(setReviews);
  }, [id]);

  return (
    <Container>
      {reviews.length !== 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </Container>
  );
  // return (
  //     <>
  //     <Container>

  //     {reviews.map(({author, content, id}) => {
  //         return (
  //             <li key={id}>
  //                 <h3>Author: {author}</h3>
  //                 <p>{content}</p>
  //             </li>

  //         )
  //     })}
  //     </Container>

  //     </>
  // )
};
