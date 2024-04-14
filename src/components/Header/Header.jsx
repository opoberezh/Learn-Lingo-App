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
  LoginText,
  Authentication,
  Button,
} from './Header.styled';
import ukraine from '../../assets/ukraine.svg';
import login from '../../assets/login.svg';

export const Header = () => {
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
          <IconWrapper src={login} alt="authenticate" />
          <LoginText>log in</LoginText>
        </LoginWrapper>
        <Button>Registration</Button>
      </Authentication>
    </HeaderContainer>
  );
};
