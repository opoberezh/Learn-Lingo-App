import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from '../../redux/auth/celectors';
import { useSelector } from 'react-redux';

export const useAuth = () => {
  const isLoggedI = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedI,
    isRefreshing,
    user,
  };
};
