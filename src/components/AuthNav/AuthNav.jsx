import { NavLink } from 'react-router-dom';
import login from '../../assets/login.svg';
import { Authentication, LoginButton, Icon, Button } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Authentication>
      <NavLink to="/login">
        <LoginButton>
          <Icon src={login} alt="Login" />
          Log in
        </LoginButton>
      </NavLink>
      <NavLink to="/register">
        <Button>Registration</Button>
      </NavLink>
    </Authentication>
  );
};

export default AuthNav;
