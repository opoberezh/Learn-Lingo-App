import * as Yup from 'yup';

export const RegisterSchema = Yup.object({
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

export const LoginSchema = Yup.object({
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required!'),
  password: Yup.string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required!'),
});

export const BookingSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Full Name is required')
    .matches(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/, 'Full Name should only contain letters and spaces')
    .min(2, 'Full Name should be at least 2 characters long')
    .max(50, 'Full Name should be at most 50 characters long'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: Yup.string().required('Phone Number is required'),
  picked: Yup.string().required('Please pick an option')
});

