import Box from '@mui/material/Box';
// import * as React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import { Button } from './RegisterModal.styled';

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

const RegisterModal = ({ open, setOpen }) => {
  // const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);

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
        </Box>
      </Modal>
    </div>
  );
};

export default RegisterModal;
