
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';


import { LogOutButton, Authentication, LoginWrapper,  UserMailDiv, UserMail, StyledIcon } from './UserMenu.styled';
import sprite from '../../../assets/symbol.svg';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import { clearFavorites } from '../../redux/favorites/slice';


const UserMenu = () => {
  const {theme} = useContext(ThemeContext);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOut());
    dispatch(clearFavorites());
  };

  return (
    <Authentication>
      <LoginWrapper>
      <StyledIcon theme={theme}>
            <use xlinkHref={`${sprite}#icon-login`} />
          </StyledIcon>
        <LogOutButton theme={theme} type="button" onClick={handleLogout}>
          Log out
          
        </LogOutButton>
        <UserMailDiv>
          <UserMail>  {user.name}</UserMail>
        </UserMailDiv>
      </LoginWrapper>
      
    </Authentication>
  );
};

export default UserMenu;
