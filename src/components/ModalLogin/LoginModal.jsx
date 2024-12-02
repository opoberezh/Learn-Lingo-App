import { useDispatch  } from 'react-redux';
import {  useContext, useState } from 'react';
import { logIn } from '../../redux/auth/operations';
import Box from '@mui/material/Box';
import { Formik } from 'formik';
import { LoginSchema } from '../YupSchema/YupSchema';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';
import {
  ErrorMessageStyled,
  StyledField,
  StyledForm,
} from './LoginModal.styled';
import { useNavigate } from 'react-router-dom';
import ButtonModal from '../ButtonModal/ButtonModal';
import { ThemeContext } from '../../ThemeProvider';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 566,
  height: 506,
  bgcolor: 'background.paper',
  borderRadius: 10,
  p: 8,
};



const LoginModal = ({ open, setOpen,  }) => {
  const {theme} = useContext(ThemeContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

const handleLoginClose = () => {
    setOpen(false);
    navigate('/');
  };
  const handlePasswordVisibility = () => {
    setShowPassword((prevPassword) => !prevPassword);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleLoginClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon
            onClick={handleLoginClose}
            sx={{
              position: 'absolute',
              top: '6%',
              left: '93%',
              transform: 'translate(-50%, -50%)',
              width: 32,
              height: 32,
              cursor: 'pointer',
            }}
          />
          <Typography
            id="modal-modal-title"
            variant="h3"
            component="h2"
            sx={{ mb: 1, fontSize: 40, fontWeight: 500 }}
          >
            Log In
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ fontSize: 16, fontWeight: 400 }}
          >
            Welcome back! Please enter your credentials to access your account
            and continue your search for a teacher.
          </Typography>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={LoginSchema}
            onSubmit={({ ...values }, actions) => {
              dispatch(logIn({ ...values }));
              actions.resetForm();
              setOpen(false);
              navigate('/');
            }}
          >
            {({
              handleSubmit,
              errors,
              touched,
              handleBlur,
              handleChange,
              values,
            }) => (
              <StyledForm onSubmit={handleSubmit}>
                <StyledField
                theme={theme}
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email ? (
                  <ErrorMessageStyled>{errors.email}</ErrorMessageStyled>
                ) : null}
                <div style={{ position: 'relative' }}>
                  <StyledField
                  theme={theme}
                    id="password"
                    name="password"
                    placeholder="Password"
                    type={showPassword ? 'text' : 'password'}
                    success="true"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '68%',
                      right: 16,
                      transform: 'translateY(-50%)',
                      cursor: 'pointer',
                    }}
                    onClick={handlePasswordVisibility}
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </div>
                </div>
                {errors.password && touched.password ? (
                  <ErrorMessageStyled>{errors.password}</ErrorMessageStyled>
                ) : null}
                <ButtonModal text="Sign In" onClick={handleSubmit} />
              </StyledForm>
            )}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
};

export default LoginModal;
