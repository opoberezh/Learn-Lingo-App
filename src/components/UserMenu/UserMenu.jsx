import { useAuth } from '../hooks';
import { logOut } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { LogOutButton, Authentication, LoginWrapper, IconWrapper } from './UserMenu.styled';
import logout from '../../../assets/logOut.svg';
import { deepOrange } from '@mui/material/colors';


const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useAuth();

  return (
    <Authentication>
    <LoginWrapper>
      <LogOutButton type="button" onClick={() => dispatch(logOut())}>
        Log out
        <IconWrapper src={logout} alt="log out" />
      </LogOutButton>
    </LoginWrapper>
    <Stack direction="row" spacing={2}>
      <Avatar
        
        sx={{ bgcolor: deepOrange[500] }}
      >{user.name}</Avatar>
    </Stack>
  </Authentication>
  )
};

export default UserMenu;
