import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks';
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

import logout from '../../assets/logOut.svg';
import { logOut } from '../../redux/auth/operations';
import { Avatar } from '@mui/material';

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
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
          <LogOutButton type="button" onClick={() => dispatch(logOut())}>
            Log out
            <IconWrapper src={logout} alt="log out" />
          </LogOutButton>
        </LoginWrapper>
        <div>
          <Avatar
            alt={user.name}
            src={user.avatar}
            sx={{ width: 56, height: 56 }}
          />
        </div>
      </Authentication>
    </HeaderContainer>
  );
};

export default Header;
