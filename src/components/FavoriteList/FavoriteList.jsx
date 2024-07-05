import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/selectors';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import TeacherCard from '../TeacherCard/TeacherCard';
import { FavoriteCardsWrapper } from './FavoriteList.styled';

const FavoriteList = () => {
  const favorites = useSelector(selectFavorites);
  const isAuthenticated = useSelector(selectIsLoggedIn);

  return (
    isAuthenticated && (
      <FavoriteCardsWrapper>
        {favorites.map((teacher) => (
          <TeacherCard
            key={teacher.id}
            teacher={teacher}
            isFavorite={true}
          />
        ))}
      </FavoriteCardsWrapper>
    )
  );
};

export default FavoriteList;
