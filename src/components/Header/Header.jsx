import { useState } from 'react';

import Navigation from '../Navigation/Navigation';
import { HeaderWrapper } from './Header.styled';
import RegisterModal from '../ModalRegister/RegisterModal';
import LoginModal from '../ModalLogin/LoginModal';
import { useAuth } from '../../hooks/index';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../Authentication/AuthNav';



const Header = () => {
  const {isLoggedIn} = useAuth();
  const [registerOpen, setRegisterOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);


  
  return (
    <HeaderWrapper>
      <Navigation />
      {isLoggedIn ? <UserMenu/> : <AuthNav setRegisterOpen={setRegisterOpen} setLoginOpen={setLoginOpen} />}
      <LoginModal open={loginOpen} setOpen={setLoginOpen} />
      <RegisterModal open={registerOpen} setOpen={setRegisterOpen} />
    
    </HeaderWrapper>
  );
};

export default Header;
