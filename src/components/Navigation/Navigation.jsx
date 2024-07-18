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

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const { theme } = useContext(ThemeContext);
  return (
    <Nav isLoggedIn={isLoggedIn}>
      <StyledLink to="/" theme={theme}>
        <Logo src={ukraine} alt="Ukraine Flag" />
        LearnLingo
      </StyledLink>

      <LinkWrapper>
        <LinkStyled to="/" theme={theme}>Home</LinkStyled>
        <LinkStyled to="/teachers" theme={theme}>Teachers</LinkStyled>
        {isLoggedIn && <LinkStyled to="/favorite" theme={theme}>Favorite</LinkStyled>}
      </LinkWrapper>
    </Nav>
  );
};

export default Navigation;
