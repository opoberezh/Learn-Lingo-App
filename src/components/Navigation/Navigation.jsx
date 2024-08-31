import { useAuth } from '../../hooks/index';
import ukraine from '../../../assets/ukraine.svg';
import {
  LinkStyled,
  LinkWrapper,
  Logo,
  Nav,
  StyledLink,
} from './Navigation.styled';
import { ThemeContext } from '../../ThemeProvider';
import { useContext } from 'react';

const Navigation = ({toggleMenu}) => {
  const { isLoggedIn } = useAuth();
  const { theme } = useContext(ThemeContext);
  return (
    <Nav isLoggedIn={isLoggedIn}>
      <StyledLink to="/" theme={theme} onClick={toggleMenu}>
        <Logo src={ukraine} alt="Ukraine Flag" />
        LearnLingo
      </StyledLink>

      <LinkWrapper>
        <LinkStyled to="/" theme={theme} onClick={toggleMenu}>Home</LinkStyled>
        <LinkStyled to="/teachers" theme={theme} onClick={toggleMenu}>Teachers</LinkStyled>
        {isLoggedIn && <LinkStyled to="/favorite" theme={theme} onClick={toggleMenu}>Favorite</LinkStyled>}
      </LinkWrapper>
    </Nav>
  );
};

export default Navigation;
