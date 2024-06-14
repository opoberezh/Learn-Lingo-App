import Box from '@mui/material/Box';
import {  Formik } from 'formik';
import { BookingSchema } from '../YupSchema/YupSchema';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import {
  InfoList,
  TeacherAvatar,
  TeacherInfoWrapper,
  SecondaryText,
  StyledForm,
  RadioGroupTitle,
  RadioGroupWrapper,
  StyledLabel,
  StyledField,
  FormWrapper,
  FormField,
  ErrorMessageStyled,
  BookingButton,
} from './BookingModal.styled';

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

const BookingModal = ({ teacher, open, setOpen }) => {
  const handleBookingClose = () => setOpen(false);

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
          <Typography id="modal-modal-title" variant="h3" component="h2" sx={{ mb: 1, fontSize: 40, fontWeight: 500 }}>
            Book trial lesson
          </Typography>
          <Typography id="modal-modal-description" sx={{ color: '#121417CC', fontSize: 16, fontWeight: 400 }}>
            Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.
          </Typography>
          <TeacherInfoWrapper>
            <TeacherAvatar alt="Teacher Avatar" src={teacher.avatar_url} loading="lazy" />
            <div>
              <InfoList>
                <li>
                  <SecondaryText>Your teacher</SecondaryText>
                </li>
                <li>
                  <p>
                    {teacher.name} {teacher.surname}
                  </p>
                </li>
              </InfoList>
            </div>
          </TeacherInfoWrapper>
          <Formik
            initialValues={{
              picked: '',
              fullName: '',
              email: '',
              phoneNumber: '',
            }}
            validationSchema={BookingSchema}
            onSubmit={(values) => {
              // handle form submission
              console.log(values);
              handleBookingClose();
            }}
          >
            {({ handleSubmit, errors, touched, handleBlur, handleChange, values }) => (
              <StyledForm onSubmit={handleSubmit}>
                <RadioGroupTitle id="my-radio-group">
                  What is your main reason for learning English?
                </RadioGroupTitle>
                <RadioGroupWrapper role="group" aria-labelledby="my-radio-group">
                  <StyledLabel>
                    <StyledField type="radio" name="picked" value="1" />
                    Career and business
                  </StyledLabel>
                  <StyledLabel>
                    <StyledField type="radio" name="picked" value="2" />
                    Lesson for kids
                  </StyledLabel>
                  <StyledLabel>
                    <StyledField type="radio" name="picked" value="3" />
                    Living abroad
                  </StyledLabel>
                  <StyledLabel>
                    <StyledField type="radio" name="picked" value="4" />
                    Exams and coursework
                  </StyledLabel>
                  <StyledLabel>
                    <StyledField type="radio" name="picked" value="5" />
                    Culture, travel or hobby
                  </StyledLabel>
                  {errors.picked && touched.picked ? (
                    <ErrorMessageStyled>{errors.picked}</ErrorMessageStyled>
                  ) : null}
                </RadioGroupWrapper>
                <FormWrapper>
                  <div>
                    <FormField
                      id="fullName"
                      name="fullName"
                      placeholder="Full Name"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.fullName}
                    />
                    {errors.fullName && touched.fullName ? (
                      <ErrorMessageStyled>{errors.fullName}</ErrorMessageStyled>
                    ) : null}
                  </div>
                  <div>
                    <FormField
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
                  </div>
                  <div>
                    <FormField
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      type="number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phoneNumber}
                    />
                    {errors.phoneNumber && touched.phoneNumber ? (
                      <ErrorMessageStyled>{errors.phoneNumber}</ErrorMessageStyled>
                    ) : null}
                  </div>
                </FormWrapper>
                <BookingButton type="submit">Book</BookingButton>
              </StyledForm>
            )}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
};

export default BookingModal;
