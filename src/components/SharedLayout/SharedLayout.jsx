import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwidcher';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <ThemeSwitcher/>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
