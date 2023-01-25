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
