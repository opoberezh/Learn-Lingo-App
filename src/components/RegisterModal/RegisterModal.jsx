import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from '../../redux/auth/operations';
import Box from '@mui/material/Box';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 566,
  height: 600,
  bgcolor: 'background.paper',
  borderRadius: 12,

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
    .required('Password is required'),
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
          <Typography
            id="modal-modal-title"
            variant="h3"
            component="h2"
            sx={{ mb: 2.5, fontSize: 40, fontWeight: 500 }}
          >
            Registration
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ fontSize: 16, fontWeight: 400 }}
          >
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information
          </Typography>
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
            }}
            validationSchema={RegisterSchema}
            onSudmit={({ ...values }, actions) => {
              dispatch(register({ ...values }));
              actions.resetForm();
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
              <Form onSubmit={handleSubmit}>
                <Field
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
                <Field
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
                <Field
                  id="password"
                  name="password"
                  placeholder="Password"
                  type="password"
                  success="true"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}
                <button type="submit">Sign Up</button>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
};

export default RegisterModal;
