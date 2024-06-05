// UserMenu.jsx
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { LogOutButton, Authentication, LoginWrapper, IconWrapper } from './UserMenu.styled';
import logout from '../../../assets/logOut.svg';
import { deepOrange } from '@mui/material/colors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  console.log('User from selector:', user); // Додано для діагностики

  return (
    <Authentication>
      <LoginWrapper>
        <LogOutButton type="button" onClick={() => dispatch(logOut())}>
          Log out
          <IconWrapper src={logout} alt="log out" />
        </LogOutButton>
        <div>
          <p>{user.email}</p>
        </div>
      </LoginWrapper>
      <Stack direction="row" spacing={2}>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>
          {user && user.name ? user.name[0] : 'U'}
        </Avatar>
      </Stack>
    </Authentication>
  );
};

export default UserMenu;
