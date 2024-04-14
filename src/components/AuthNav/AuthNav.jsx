import {
  Authentication,
  Button,
  Icon,
  LoginButton,
  LoginWrapper,
} from './AuthNav.styled';
import login from '../../assets/login.svg';

const AuthNav = () => {
  return (
    <Authentication>
      <LoginWrapper>
        <LoginButton>
          <Icon src={login} alt="Login" />
          Log in
        </LoginButton>
      </LoginWrapper>

      <Button>Registration</Button>
    </Authentication>
  );
};

export default AuthNav;
