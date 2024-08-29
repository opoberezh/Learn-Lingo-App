import { useContext, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import { HeaderWrapper, Logo } from './Header.styled';
import RegisterModal from '../ModalRegister/RegisterModal';
import LoginModal from '../ModalLogin/LoginModal';
import { useAuth } from '../../hooks/index';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../Authentication/AuthNav';
import MobileMenu from '../MobileMenu/MobileMenu';

import ukraine from '../../../assets/ukraine.svg';
import { StyledLink } from '../Header/Header.styled';
import { ThemeContext } from '../../ThemeProvider';

const Header = () => {
  const { isLoggedIn } = useAuth();
  const [registerOpen, setRegisterOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
    <MobileMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
    <StyledLink to="/" theme={theme}>
        <Logo src={ukraine} alt="Ukraine Flag" />
        LearnLingo
      </StyledLink>
    <HeaderWrapper>
      
      <Navigation />
      {isLoggedIn ? <UserMenu/> : <AuthNav setRegisterOpen={setRegisterOpen} setLoginOpen={setLoginOpen} />}
      <LoginModal open={loginOpen} setOpen={setLoginOpen} />
      <RegisterModal open={registerOpen} setOpen={setRegisterOpen} />
    </HeaderWrapper>
    </>
    
  );
};

export default Header;
