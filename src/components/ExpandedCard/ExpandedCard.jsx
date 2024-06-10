import {
  Avatar,
  ExpandedCardContainer,
  IconStar,
  ReviewList,
  ReviewWrapper,
  Rating,
  ReviewComment,
} from './ExpandedCard.styled';
import sprite from '../../../assets/symbol.svg';

const ExpandedCard = ({ teacher }) => {
  const {
    experience, reviews
  } = teacher || {};


  return (
    <ExpandedCardContainer>
      <p>{experience}</p>
      <ReviewList>
        {reviews &&
          reviews.map((review, index) => (
            <li key={index}>
              <div>
                <ReviewWrapper>
                  <Avatar src={review.img} alt="Reviewer Avatar" />
                  <div>
                    <p>{review.reviewer_name}</p>
                    <Rating>
                      <IconStar>
                        <use xlinkHref={sprite + '#icon-star-full'} />
                      </IconStar>
                      {review.reviewer_rating}
                    </Rating>
                  </div>
                </ReviewWrapper>

                <ReviewComment>{review.comment}</ReviewComment>
              </div>
            </li>
          ))}
      </ReviewList>
    </ExpandedCardContainer>
  );
};

export default ExpandedCard;
