import BadgeAvatars from '../Avatar/BadgeAvatar';
import {
  AvatarCircle,
  CardContainer,
  FirstList,
  SecondaryText,
  ListWrapper,
  
  SpanText,
  NameText,
 
  IconOpenBook,
  FirstListTest,
  IconStar,
  SpanPrice,
  SecondList,
  UnderlinedText,
  ReadMoreButton,
} from './TeacherCard.styled';
import sprite from '../../../assets/symbol.svg';

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
          <SecondaryText>Languages</SecondaryText>

          <FirstList>
            <li>
              <FirstListTest>
                <IconOpenBook>
                  <use xlinkHref={sprite + '#icon-book-open-01'} />
                </IconOpenBook>
                Lessons online
              </FirstListTest>
            </li>
            <li>
              <FirstListTest>Lessons done: {lessons_done}</FirstListTest>
            </li>
            <li>
              <FirstListTest>
              <IconStar>
              <use xlinkHref={sprite + '#icon-star-full'} />
                </IconStar>
                Rating: {rating}</FirstListTest>
            </li>
            <li>
              <FirstListTest>Price / 1 hour: <SpanPrice>{price_per_hour}$</SpanPrice></FirstListTest>
            </li>
          </FirstList>
        </ListWrapper>

        <NameText>
          {name} {surname}
        </NameText>

        <SecondList>
          <li>
          <p>
              <SpanText>Speaks: </SpanText>
              <UnderlinedText>
                {languages && languages.join(', ')}
              </UnderlinedText>
            </p>
          </li>
          <li>
            <p>
              <SpanText>Lesson Info:</SpanText> {lesson_info}
            </p>
          </li>
          <li>
            <p>
              <SpanText>Conditions</SpanText>: {conditions}
            </p>
          </li>
        </SecondList>

        <ReadMoreButton
          type="button">Read more</ReadMoreButton>
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
