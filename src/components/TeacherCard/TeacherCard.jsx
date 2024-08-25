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
  FavoriteButton,
  FavoriteIcon,
} from './TeacherCard.styled';
import sprite from '../../../assets/symbol.svg';
import { useContext, useEffect, useState } from 'react';
import ExpandedCard from '../ExpandedCard/ExpandedCard';
import ModalReactHookForm from '../ModalBooking/ModalReactHookForm';
import BasicButton from '../ButtonBasic/ButtonBasic';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/selectors';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { addToFavorite, removeFromFavorite } from '../../redux/favorites/slice';
import { ThemeContext } from '../../ThemeProvider';
import {saveFavoriteTeacher} from '../../redux/favorites/operations';

const TeacherCard = ({ teacher }) => {
  const { theme } = useContext(ThemeContext);
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
    const isFav = Array.isArray(favorites) && favorites.some((fav) => fav.id === id);

    setIsFavorite(isFav);
  }, [favorites, id]);

  const handleToggleFavorite = () => {
    if (!isAuthenticated) {
      return alert('You are not an authenticated user. Please, register or log in.');
    }
    if (isFavorite) {
      // Видалення з улюблених
      dispatch(removeFromFavorite(id));
      // Виклик функції для видалення з Firebase
      saveFavoriteTeacher({ ...teacher, remove: true });
    } else {
      // Додавання до улюблених
      dispatch(addToFavorite(teacher));
      // Виклик функції для збереження у Firebase
      saveFavoriteTeacher(teacher);
    }
    setIsFavorite(!isFavorite);
  };


  return (
    <CardContainer isExpanded={isExpanded} style={{ position: 'relative' }}>
      <AvatarCircle theme={theme}>
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

        <ReadMoreButton theme={theme} type="button" onClick={handleToggleExpand}>
          {isExpanded ? 'Show less' : 'Read more'}
        </ReadMoreButton>

        <RadioContainer>
          {levels.map((level, index) => (
            <RadioInputWrapper theme={theme} key={index} checked={selectedLevel === level}>
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

        {isExpanded && (
          <ModalReactHookForm
            teacher={teacher}
            open={modalOpen}
            setOpen={setModalOpen}
            selectedLevel={selectedLevel}
          />
        )}

        <FavoriteButton onClick={() => handleToggleFavorite(teacher)}>
          <FavoriteIcon isFavorite={isFavorite} theme={theme}>
            <use xlinkHref={sprite + (isFavorite ? '#icon-hover' : '#icon-Vector')} />
          </FavoriteIcon>
        </FavoriteButton>
      </div>
    </CardContainer>
  );
};

export default TeacherCard;
