import { Navigate } from 'react-router-dom';
import { useAuth } from './components/hooks';

export const RestrictedRouter = ({
  component: Component,
  redirectTo = '/',
}) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
