import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from '../../redux/auth/operations';
import Box from '@mui/material/Box';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';
import {
  ErrorMessageStyled,
  SignUpButton,
  StyledField,
  StyledForm,
} from './RegisterModal.styled';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 566,
  height: 600,
  bgcolor: 'background.paper',
  borderRadius: 10,
  p: 8,
};

const RegisterSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required!'),
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required!'),
  password: Yup.string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required!'),
});

const RegisterModal = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword((prevPassword) => !prevPassword);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: '6%',
              left: '93%',
              transform: 'translate(-50%, -50%)',
              width: 32,
              height: 32,
            }}
          />
          <Typography
            id="modal-modal-title"
            variant="h3"
            component="h2"
            sx={{ mb: 1, fontSize: 40, fontWeight: 500 }}
          >
            Registration
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ fontSize: 16, fontWeight: 400 }}
          >
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information.
          </Typography>
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
            }}
            validationSchema={RegisterSchema}
            onSubmit={({ ...values }, actions) => {
              dispatch(register({ ...values }));
              actions.resetForm();
              setOpen(false);
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
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.name && touched.name ? (
                  <ErrorMessageStyled>{errors.name}</ErrorMessageStyled>
                ) : null}
                <StyledField
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
                <SignUpButton type="submit">Sign Up</SignUpButton>
              </StyledForm>
            )}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
};

export default RegisterModal;
