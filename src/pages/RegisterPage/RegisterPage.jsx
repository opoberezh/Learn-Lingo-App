import { useState } from 'react';
import RegisterModal from '../../components/ModalRegister/RegisterModal';

const RegisterPage = () => {
  const [open, setOpen] = useState(false);
  return <RegisterModal open={open} setOpen={setOpen}/>;
};

export default RegisterPage;
