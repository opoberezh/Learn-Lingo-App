import Header from '../Header/Header';
import InactiveHeader from '../InactiveHeader/InactiveHeader';
import { useAuth } from '../hooks';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return <header>{isLoggedIn ? <Header /> : <InactiveHeader />}</header>;
};

export default AppBar;
