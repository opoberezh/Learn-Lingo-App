// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../assets/login.svg';
import {
  Authentication,
  LoginButton,
  Icon,
  Button,
} from './Authentication.styled';

const Auth = ({ setRegisterOpen, setLoginOpen }) => {
  const handleRegisterOpen = () => setRegisterOpen(true);
  const handleLoginOpen = () => setLoginOpen(true);

  return (
    <Authentication>
      <NavLink to="/login">
        <LoginButton type="button" onClick={handleLoginOpen}>
          <Icon src={login} alt="Login" />
          Log in
        </LoginButton>
      </NavLink>
      <NavLink to="/register">
        <Button type="button" onClick={handleRegisterOpen}>
          Registration
        </Button>
      </NavLink>
    </Authentication>
  );
};

export default Auth;
