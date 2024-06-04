import { useState } from 'react';
import RegisterModal from '../../components/RegisterModal/RegisterModal';

const RegisterPage = () => {
  const [open, setOpen] = useState(false);
  return <RegisterModal open={open} setOpen={setOpen}/>;
};

export default RegisterPage;
