import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  ErrorMessageStyled,
  FormInput,
  FormWrapper,
  RadioGroupTitle,
  RadioGroupWrapper,
  StyledForm,
  StyledLabel,
  StyledRadioInput,
  TeacherAvatar,
  TeacherInfoWrapper,
} from './ModalReactHookForm.styled';
import ButtonModal from '../ButtonModal/ButtonModal';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../ThemeProvider';

const schema = yup.object({
  picked: yup.string().required('Please select an option'),
  fullName: yup
    .string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required!'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required!'),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required!'),
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 972,
  bgcolor: 'background.paper',
  borderRadius: 10,
  p: 8,
};

const ModalReactHookForm = ({ teacher, open, setOpen, selectedLevel }) => {
  const { theme } = useContext(ThemeContext);
  const [bookingInfo, setBookingInfo] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleBookingClose = () => {
    setOpen(false);
    setShowAlert(true);
  };

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    initialValues: {
      picked: '',
      fullName: '',
      email: '',
      phoneNumber: '',
    },
  });

  const onSubmit = (data) => {
    setBookingInfo({ ...data, selectedLevel });
    reset();
    handleBookingClose();
  };

  useEffect(() => {
    if (!open && bookingInfo && showAlert) {
      alert(
        `Booking successful!\n\nDetails:\nName: ${bookingInfo.fullName}\nEmail: ${bookingInfo.email}\nPhone: ${bookingInfo.phoneNumber}\nReason: ${bookingInfo.picked}\nLevel: ${bookingInfo.selectedLevel}\nTeacher: ${teacher.name} ${teacher.surname}`
      );
      setShowAlert(false);
    }
  }, [open, bookingInfo, showAlert, teacher]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleBookingClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon
            onClick={handleBookingClose}
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
            Book trial lesson
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ color: '#121417CC', fontSize: 16, fontWeight: 400 }}
          >
            Our experienced tutor will assess your current language level,
            discuss your learning goals, and tailor the lesson to your specific
            needs.
          </Typography>
          <TeacherInfoWrapper>
            <TeacherAvatar
              alt="Teacher Avatar"
              src={teacher.avatar_url}
              loading="lazy"
            />
            <div>
              <Typography variant="subtitle1">Your teacher</Typography>
              <Typography variant="h6">{`${teacher.name} ${teacher.surname}`}</Typography>
            </div>
          </TeacherInfoWrapper>
          <StyledForm  onSubmit={handleSubmit(onSubmit)}>
            <RadioGroupTitle id="my-radio-group">
              What is your main reason for learning English?
            </RadioGroupTitle>
            <RadioGroupWrapper
              role="group"
              aria-labelledby="my-radio-group"
              style={{ marginBottom: '15px' }}
            >
              <StyledLabel>
                <Controller
                  name="picked"
                  control={control}
                  render={({ field }) => (
                    <StyledRadioInput
                      theme={theme}
                      type="radio"
                      {...field}
                      value="Career and business"
                    />
                  )}
                />
                Career and business
              </StyledLabel>
              <StyledLabel>
                <Controller
                  name="picked"
                  control={control}
                  render={({ field }) => (
                    <StyledRadioInput
                    theme={theme}
                      type="radio"
                      {...field}
                      value="Lesson for kids"
                    />
                  )}
                />
                Lesson for kids
              </StyledLabel>
              <StyledLabel>
                <Controller
                  name="picked"
                  control={control}
                  render={({ field }) => (
                    <StyledRadioInput
                    theme={theme}
                      type="radio"
                      {...field}
                      value="Living abroad"
                    />
                  )}
                />
                Living abroad
              </StyledLabel>
              <StyledLabel>
                <Controller
                  name="picked"
                  control={control}
                  render={({ field }) => (
                    <StyledRadioInput
                    theme={theme}
                      type="radio"
                      {...field}
                      value="Exams and coursework"
                    />
                  )}
                />
                Exams and coursework
              </StyledLabel>
              <StyledLabel>
                <Controller
                  name="picked"
                  control={control}
                  render={({ field }) => (
                    <StyledRadioInput
                    theme={theme}
                      type="radio"
                      {...field}
                      value="Culture, travel or hobby"
                    />
                  )}
                />
                Culture, travel or hobby
              </StyledLabel>
            </RadioGroupWrapper>
            {errors.picked && (
              <ErrorMessageStyled>{errors.picked.message}</ErrorMessageStyled>
            )}
            <FormWrapper>
              <div>
                <FormInput theme={theme} {...register('fullName')} placeholder="Full Name" />
                {errors.fullName && (
                  <ErrorMessageStyled>
                    {errors.fullName?.message}
                  </ErrorMessageStyled>
                )}
              </div>

              <div>
                <FormInput theme={theme} {...register('email')} placeholder="Email" />
                {errors.email && (
                  <ErrorMessageStyled>
                    {errors.email?.message}
                  </ErrorMessageStyled>
                )}
              </div>

              <div>
                <FormInput theme={theme}
                  {...register('phoneNumber')}
                  placeholder="Phone Number"
                />
                {errors.phoneNumber && (
                  <ErrorMessageStyled>
                    {errors.phoneNumber?.message}
                  </ErrorMessageStyled>
                )}
              </div>
            </FormWrapper>

            <ButtonModal text="Book" onClick={handleSubmit(onSubmit)} />
          </StyledForm>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalReactHookForm;
