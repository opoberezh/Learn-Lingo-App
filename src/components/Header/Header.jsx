import { useState } from 'react';
import Auth from '../Authentication/Authentication';
import Navigation from '../Navigation/Navigation';
import { HeaderWrapper } from './Header.styled';
import RegisterModal from '../RegisterModal/RegisterModal';
import LoginModal from '../LoginModal/LoginModal';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <HeaderWrapper>
      <Navigation />
      <Auth setOpen={setOpen} />
      <LoginModal open={open} setOpen={setOpen} />
      <RegisterModal open={open} setOpen={setOpen} />
    </HeaderWrapper>
  );
};

export default Header;
