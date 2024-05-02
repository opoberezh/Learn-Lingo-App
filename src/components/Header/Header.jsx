import { useState } from 'react';
import Auth from '../Authentication/Authentication';
import Navigation from '../Navigation/Navigation';
import { HeaderWrapper } from './Header.styled';
import RegisterModal from '../RegisterModal/RegisterModal';
import LoginModal from '../LoginModal/LoginModal';

const Header = () => {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  return (
    <HeaderWrapper>
      <Navigation />
      <Auth setRegisterOpen={setRegisterOpen} setLoginOpen={setLoginOpen} />
      <LoginModal open={loginOpen} setOpen={setLoginOpen} />
      <RegisterModal open={registerOpen} setOpen={setRegisterOpen} />
    </HeaderWrapper>
  );
};

export default Header;
