import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import { HeaderWrapper } from './Header.styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <Navigation />
      <AuthNav />
    </HeaderWrapper>
  );
};

export default Header;
