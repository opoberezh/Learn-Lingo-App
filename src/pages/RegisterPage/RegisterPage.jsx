import { useState } from 'react';
import RegisterModal from '../../components/ModalRegister/RegisterModal';

const RegisterPage = () => {
  const [open, setOpen] = useState(true);
  return <RegisterModal open={open} setOpen={setOpen}/>;
};

export default RegisterPage;
