import {
  Authentication,
  Button,
  Icon,
  LoginButton,
  LoginWrapper,
} from './AuthNav.styled';
import logIn from '../../assets/login.svg';

const AuthNav = () => {
  return (
    <Authentication>
      <LoginWrapper>
        <LoginButton>
          <Icon src={logIn} alt="Login" />
          Log in
        </LoginButton>
      </LoginWrapper>

      <Button>Registration</Button>
    </Authentication>
  );
};

export default AuthNav;
