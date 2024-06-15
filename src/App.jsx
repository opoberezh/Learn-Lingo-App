import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from './hooks/index';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import HomePage from './pages/HomePage/HomePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';

import { refreshUser } from './redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import LoginPage from './pages/LoginPage/LoginPage';
import TeachersPage from './pages/TeachersPage/TeachersPage';
import { PrivetRoute } from './PrivetRoute';
import FavoritePage from './pages/FavoritePage/FavoritePage';

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing uer ...</b>
  ) : (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="teachers" element={<TeachersPage />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/" component={<LoginPage />} />
            }
          />
          <Route
            path="favorite"
            element={
              <PrivetRoute redirectTo="/login" component={<FavoritePage />} />
            }
          />

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
