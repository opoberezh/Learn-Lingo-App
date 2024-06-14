import Stack from '@mui/material/Stack';
import { StyledModalButton } from './ButtonModal.styled';

export default function ButtonModal({ text, onClick }) {
  return (
    <Stack spacing={2} direction="row">
      <div style={{marginTop: "40px", }}>
        <StyledModalButton variant="contained" onClick={onClick}>{text}</StyledModalButton>
      </div>
      
    </Stack>
  );
}
