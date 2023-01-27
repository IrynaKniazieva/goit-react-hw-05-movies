import PropTypes from 'prop-types';

export const ReviewsList = ({ reviews }) => {
  return (
    <div>
      {reviews.map(({ author, content, id }) => {
        return (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        );
      })}
    </div>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
