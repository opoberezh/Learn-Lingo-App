import { useState } from 'react';
import LoginModal from '../../components/ModalLogin/LoginModal';

const LoginPage = () => {
  const [open, setOpen] = useState(true);

  return <LoginModal open={open} setOpen={setOpen}/>;
};

export default LoginPage;
