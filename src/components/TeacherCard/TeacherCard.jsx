import BadgeAvatars from '../Avatar/BadgeAvatar';
import { AvatarCircle, CardContainer,  FirstList,  SecondaryText,  ListWrapper,  SecondList, SpanText , NameText, ThirdList} from './TeacherCard.styled';

const TeacherCard = ({ teacher }) => {
  const {
    avatar_url,
    lessons_done,
    price_per_hour,
    name,
    surname,
    languages,
    conditions,
    rating,
    lesson_info,
    levels,
  } = teacher || {};

  return (
    <CardContainer>
      <AvatarCircle>
        <BadgeAvatars avatar_url={avatar_url} />
      </AvatarCircle>
      <div>
        <ListWrapper>
         
            <FirstList>
              <li>
                <SecondaryText>Languages</SecondaryText>
              </li>
              <li>
                <NameText>
                  {name} {surname}
                </NameText>
              </li>
            </FirstList>
         
          <SecondList>
            <li>
              <p>Lessons done: {lessons_done}</p>
            </li>
            <li>
              <p>Rating: {rating}</p>
            </li>
            <li>
              <p>Price per hour: {price_per_hour}$</p>
            </li>
          </SecondList>
        </ListWrapper>

        <ThirdList>
          <li>
            <p><SpanText>Speaks: </SpanText>{languages && languages.join(', ')}</p>
          </li>
          <li>
            <p><SpanText>Lesson Info:</SpanText> {lesson_info}</p>
          </li>
          <li>
            <p><SpanText>Conditions</SpanText>: {conditions}</p>
          </li>
        </ThirdList>

        <button type="button">Read more</button>
        {/* <ul>
          {reviews && reviews.map((review, index) => (
            <li key={index}>
              <p><strong>{review.reviewer_name}:</strong> {review.comment}</p>
              <p>Rating: {review.reviewer_rating}</p>
            </li>
          ))}
        </ul> */}

        <div>{levels}</div>
      </div>
    </CardContainer>
  );
};

export default TeacherCard;
