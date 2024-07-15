import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from './hooks/index';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { AppWrapper } from './App.styled';
import { refreshUser } from './redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivetRoute } from './PrivetRoute';
import InactiveLayout from './components/InactiveLayout/InactiveLayout';
import Loader from './components/Loader/Loader'; 
import ThemeProvider from './ThemeProvider';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const TeachersPage = lazy(() => import('./pages/TeachersPage/TeachersPage'));
const FavoritePage = lazy(() => import('./pages/FavoritePage/FavoritePage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user ...</b>
  ) : (
    <ThemeProvider>
    <AppWrapper>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="teachers" element={<TeachersPage />} />
            <Route
              path="register"
              element={
                <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
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
          </Route>
          <Route
            path="*"
            element={
              <InactiveLayout>
                <ErrorPage />
              </InactiveLayout>
            }
          />
        </Routes>
      </Suspense>
    </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
