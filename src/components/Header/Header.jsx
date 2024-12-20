import { useContext, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import { useLocation } from 'react-router-dom';
import { Container, HeaderWrapper, Logo } from './Header.styled';
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
  const location = useLocation();
  const isAuthPage =
    location.pathname === '/login' || location.pathname === '/register';
  const toggleMenu = () => {
    if (!loginOpen && !registerOpen) {
      setMenuOpen((prev) => !prev);
    }
  };

  return (
    <Container>
      {!isAuthPage && (
        <>
          <MobileMenu
            isOpen={menuOpen}
            toggleMenu={toggleMenu}
            isModalOpen={loginOpen || registerOpen}
          />
          <StyledLink to="/" theme={theme}>
            <Logo src={ukraine} alt="Ukraine Flag" />
            LearnLingo
          </StyledLink>
        </>
      )}
{!isAuthPage && (
   <HeaderWrapper>
        <Navigation />
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <AuthNav
            setRegisterOpen={setRegisterOpen}
            setLoginOpen={setLoginOpen}
          />
        )}
        <LoginModal open={loginOpen} setOpen={setLoginOpen} />
        <RegisterModal open={registerOpen} setOpen={setRegisterOpen} />
      </HeaderWrapper>
)}
     
    </Container>
  );
};

export default Header;
