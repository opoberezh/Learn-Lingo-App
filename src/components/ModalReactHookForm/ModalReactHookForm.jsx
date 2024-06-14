import Typography from "@mui/material/Typography";
import  Box  from "@mui/material/Box";
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { Controller, useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TeacherAvatar } from "./ModalReactHookForm.styled";

const schema = yup.object({
  picked: yup.string().required('Please select an option'),
  fullName: yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required!'),
  email: yup.string().email('Enter a valid email').required('Email is required!'),
  phoneNumber: yup.string()
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

const ModalReactHookForm = ({ teacher, open, setOpen }) => {
  const handleBookingClose = () => setOpen(false);
  const {control,
    register,
    handleSubmit,
    formState: {errors}, reset
  } = useForm({
    resolver: yupResolver(schema),
    initialValues:{
      picked: '',
      fullName: '',
      email: '',
      phoneNumber: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
    handleBookingClose();
  };
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
          <div>
            <TeacherAvatar alt="Teacher Avatar" src={teacher.avatar_url} loading="lazy" />
            <div>
            <Typography variant="subtitle1">Your teacher</Typography>
            <Typography variant="h6">{`${teacher.name} ${teacher.surname}`}</Typography>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div id="my-radio-group">What is your main reason for learning English?</div>
          <div role="group" aria-labelledby="my-radio-group" style={{ marginBottom: '15px' }}>
          <label>
              <Controller
                name="picked"
                control={control}
                render={({ field }) => (
                  <input type="radio" {...field} value="Career and business" />
                )}
              />
              Career and business
            </label>
            <label>
              <Controller
                name="picked"
                control={control}
                render={({ field }) => (
                  <input type="radio" {...field} value="Lesson for kids" />
                )}
              />
              Lesson for kids
            </label>
            <label>
              <Controller
                name="picked"
                control={control}
                render={({ field }) => (
                  <input type="radio" {...field} value="Living abroad" />
                )}
              />
              Living abroad
            </label>
            <label>
              <Controller
                name="picked"
                control={control}
                render={({ field }) => (
                  <input type="radio" {...field} value="Exams and coursework" />
                )}
              />
              Exams and coursework
            </label>
            <label>
              <Controller
                name="picked"
                control={control}
                render={({ field }) => (
                  <input type="radio" {...field} value="Culture, travel or hobby" />
                )}
              />
              Culture, travel or hobby
            </label>

          </div>
          {errors.picked && <div>{errors.picked.message}</div>}
<input {...register("fullName")}/>
<p>{errors.fullName?.message}</p>

<input {...register("email")}/>
<p>{errors.email?.message}</p>

<input {...register("phoneNumber")}/>
<p>{errors.phoneNumber?.message}</p>
<button title="Submit" onClick={handleSubmit(onSubmit)} />
          </form>
          </Box>
          </Modal>
</div>
     
        
  )
}

export default ModalReactHookForm;