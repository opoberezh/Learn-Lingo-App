import {
  HeaderContainer,
  Navigation,
  StyledLink,
  Logo,
  LogoWrapper,
  LogoName,
} from './Header.styled';
import ukraine from '../../assets/ukraine.svg';

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <Logo src={ukraine} alt="Ukraine Flag" />
        <LogoName>LearnLingo</LogoName>
      </LogoWrapper>
      <Navigation>
        <StyledLink to="/home">Home</StyledLink>
        <StyledLink to="/second">Second</StyledLink>
      </Navigation>
      <div>log in</div>
    </HeaderContainer>
  );
};
