import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { Header } from 'components/Header/Header';
// import InactiveHeader from '../InactiveHeader/InactiveHeader';

const SharedLayout = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
