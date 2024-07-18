
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';


import { LogOutButton, Authentication, LoginWrapper,  UserMailDiv, UserMail, StyledIcon } from './UserMenu.styled';
import sprite from '../../../assets/symbol.svg';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';


const UserMenu = () => {
  const {theme} = useContext(ThemeContext);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

 

  return (
    <Authentication>
      <LoginWrapper>
      <StyledIcon theme={theme}>
            <use xlinkHref={`${sprite}#icon-login`} />
          </StyledIcon>
        <LogOutButton theme={theme} type="button" onClick={() => dispatch(logOut())}>
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
