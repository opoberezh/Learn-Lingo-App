import { NavLink } from 'react-router-dom';
import sprite from '../../../assets/symbol.svg';
import { Authentication, LoginButton, Button, StyledIcon } from './AuthNav.styled';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';

const AuthNav = ({ setRegisterOpen, setLoginOpen }) => {
  const handleRegisterOpen = () => setRegisterOpen(true);
  const handleLoginOpen = () => setLoginOpen(true);
  const { theme } = useContext(ThemeContext);

  return (
    <Authentication>
      <NavLink to="/login">
        <LoginButton theme={theme} type="button" onClick={handleLoginOpen}>
          <StyledIcon theme={theme}>
            <use xlinkHref={`${sprite}#icon-login`} />
          </StyledIcon>
          Log in
        </LoginButton>
      </NavLink>
      <NavLink to="/register">
        <Button theme={theme} type="button" onClick={handleRegisterOpen}>
          Registration
        </Button>
      </NavLink>
    </Authentication>
  );
};

export default AuthNav;
