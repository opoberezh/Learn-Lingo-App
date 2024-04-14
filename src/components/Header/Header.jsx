import {
  HeaderContainer,
  Navigation,
  StyledLink,
  Logo,
  LogoWrapper,
  LogoName,
  PageWrapper,
  IconWrapper,
  LoginWrapper,
  Authentication,
  LogOutButton,
} from './Header.styled';
import ukraine from '../../assets/ukraine.svg';

import logOut from '../../assets/logOut.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <PageWrapper>
        <LogoWrapper>
          <Logo src={ukraine} alt="Ukraine Flag" />
          <LogoName>LearnLingo</LogoName>
        </LogoWrapper>
        <Navigation>
          <StyledLink to="/home">Home</StyledLink>
          <StyledLink to="/teachers">Teachers</StyledLink>
        </Navigation>
      </PageWrapper>
      <Authentication>
        <LoginWrapper>
          <LogOutButton type="button">
            Log out
            <IconWrapper src={logOut} alt="log out" />
          </LogOutButton>
        </LoginWrapper>
      </Authentication>
    </HeaderContainer>
  );
};

export default Header;
