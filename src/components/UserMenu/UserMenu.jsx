
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';


import { LogOutButton, Authentication, LoginWrapper, IconWrapper, UserMailDiv, UserMail } from './UserMenu.styled';
import logout from '../../../assets/logOut.svg';


const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

 

  return (
    <Authentication>
      <LoginWrapper>
      <IconWrapper src={logout} alt="log out" />
        <LogOutButton type="button" onClick={() => dispatch(logOut())}>
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
