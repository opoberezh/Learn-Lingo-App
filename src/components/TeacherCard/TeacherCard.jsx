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
  RadioContainer,
  RadioInput,
  RadioInputWrapper,
} from './TeacherCard.styled';
import sprite from '../../../assets/symbol.svg';
import { useState } from 'react';
import ExpandedCard from '../ExpandedCard/ExpandedCard';

const TeacherCard = ({ teacher }) => {

  const [isExpanded, setExpanded] = useState(false);
const [selectedLevel, setSelectedLevel] = useState("");

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

const handleToggleExpand = () => setExpanded(!isExpanded)

const handleLevelChange = (event) => {
  setSelectedLevel(event.target.value);
};


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
{isExpanded && (
  <ExpandedCard/>
)}
        <ReadMoreButton
          type="button" onClick={handleToggleExpand}>{isExpanded ? 'Show less' : 'Read more'}</ReadMoreButton>
        

        <RadioContainer>
                {levels.map((level, index) => (
                  <RadioInputWrapper key={index}>
                    <RadioInput
                      type="radio"
                      value={level}
                      data-label={level}
                      checked={selectedLevel === level}
                      onChange={handleLevelChange}
                    />
                  </RadioInputWrapper>
                ))}
              </RadioContainer>
      </div>
    </CardContainer>
  );
};

export default TeacherCard;
