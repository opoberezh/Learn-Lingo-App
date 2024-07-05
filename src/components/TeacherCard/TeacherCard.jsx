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
import { useEffect, useState } from 'react';
import ExpandedCard from '../ExpandedCard/ExpandedCard';
import ModalReactHookForm from '../ModalBooking/ModalReactHookForm';
import BasicButton from '../ButtonBasic/ButtonBasic';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/selectors';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { addToFavorite, removeFromFavorite } from '../../redux/favorites/slice';

const TeacherCard = ({ teacher }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isAuthenticated = useSelector(selectIsLoggedIn);
  const [isFavorite, setIsFavorite] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("");

  const {
    id,
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

  const handleToggleExpand = () => setExpanded(!isExpanded);

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  const handleModalOpen = () => setModalOpen(true);

  useEffect(() => {
    const isFav = favorites.some((fav) => fav.id === id);
    setIsFavorite(isFav);
  }, [favorites, id]);

  const handleToggleFavorite = (teacher) => {
    if (!isAuthenticated) {
      return alert('You are not an authenticated user. Please, register or log in.');
    }

    if (favorites.some(fav => fav.id === teacher.id)) {
      dispatch(removeFromFavorite(teacher.id));
    } else {
      dispatch(addToFavorite(teacher));
    }
  };

  return (
    <CardContainer isExpanded={isExpanded} style={{ position: 'relative' }}>
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
                Rating: {rating}
              </FirstListTest>
            </li>
            <li>
              <FirstListTest>
                Price / 1 hour: <SpanPrice>{price_per_hour}$</SpanPrice>
              </FirstListTest>
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
              <UnderlinedText>{languages && languages.join(', ')}</UnderlinedText>
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

        {isExpanded && <ExpandedCard teacher={teacher} />}

        <ReadMoreButton type="button" onClick={handleToggleExpand}>
          {isExpanded ? 'Show less' : 'Read more'}
        </ReadMoreButton>

        <RadioContainer>
          {levels.map((level, index) => (
            <RadioInputWrapper key={index} checked={selectedLevel === level}>
              <RadioInput
                type="radio"
                value={level}
                checked={selectedLevel === level}
                onChange={handleLevelChange}
              />
              {level}
            </RadioInputWrapper>
          ))}
        </RadioContainer>

        {isExpanded && (
          <div style={{ width: '232px', marginTop: '32px' }}>
            <BasicButton type="button" text="Book trial lesson" onClick={handleModalOpen} />
          </div>
        )}

        {isExpanded && <ModalReactHookForm teacher={teacher} open={modalOpen} setOpen={setModalOpen} />}

        <div style={{ position: 'absolute', top: '24px', right: '24px' }}>
          <button
            onClick={() => handleToggleFavorite(teacher)}
            style={{ background: 'transparent', border: 'none' }}
          >
            {isFavorite ? (
              <svg style={{ fill: '#F4C550', width: '26px', height: '26px' }}>
                <use xlinkHref={sprite + '#icon-hover'} />
              </svg>
            ) : (
              <svg style={{ fill: 'transparent', stroke: '#121417', width: '26px', height: '26px' }}>
                <use xlinkHref={sprite + '#icon-Vector'} />
              </svg>
            )}
          </button>
        </div>
      </div>
    </CardContainer>
  );
};

export default TeacherCard;
