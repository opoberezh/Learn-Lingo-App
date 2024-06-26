import { useAuth } from '../../hooks/index';

import ukraine from '../../../assets/ukraine.svg';
import {
  LinkStyled,
  LinkWrapper,
  Logo,
  Nav,
  StyledLink,
} from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Nav>
      <StyledLink to="/">
        <Logo src={ukraine} alt="Ukraine Flag" />
        LearnLingo
      </StyledLink>

      <LinkWrapper>
        <LinkStyled to="/">Home</LinkStyled>
        <LinkStyled to="/teachers">Teachers</LinkStyled>
        {isLoggedIn && <LinkStyled to="/favorite">Favorite</LinkStyled>}
      </LinkWrapper>
    </Nav>
  );
};

export default Navigation;
