import { useState } from 'react';
import LoginModal from '../../components/LoginModal/LoginModal';

const LoginPage = () => {
  const [open, setOpen] = useState(false);

  return <LoginModal open={open} setOpen={setOpen}/>;
};

export default LoginPage;
