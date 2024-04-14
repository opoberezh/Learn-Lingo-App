// import React from 'react';

import Header from '../../components/Header/Header';
import InactiveHeader from '../../components/InactiveHeader/InactiveHeader';

const WelcomePage = ({ isAuthenticated }) => {
  return <div>{isAuthenticated ? <Header /> : <InactiveHeader />}</div>;
};

export default WelcomePage;
