import { logOut } from '../auth/operations';
import { clearFavorites } from './slice'; 

const clearFavoritesMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (logOut.fulfilled.match(action)) {
    store.dispatch(clearFavorites());
  }
  return result;
};

export default clearFavoritesMiddleware;
