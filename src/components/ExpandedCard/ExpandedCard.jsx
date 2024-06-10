import { ExpandedCardContainer, ReviewContainer } from "./ExpandedCard.styled";

const ExpandedCard = ({ teacher }) => {
  const { experience, reviews } = teacher || {};
  return (
    <ExpandedCardContainer>
      <p>{experience}</p>
      <ReviewContainer>
        {reviews &&
          reviews.map((review, index) => (
            <li key={index}>
              <p>
                <span>{review.reviewer_name}</span>
                {review.reviewer_rating}
                {review.comment}
              </p>
            </li>
          ))}
      </ReviewContainer>
    </ExpandedCardContainer>
  );
};

export default ExpandedCard;
