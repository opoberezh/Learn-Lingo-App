import Stack from '@mui/material/Stack';
import { StyledModalButton } from './ButtonModal.styled';
import { ThemeContext } from '../../ThemeProvider';
import { useContext } from 'react';

export default function ButtonModal({ text, onClick }) {
  const { theme } = useContext(ThemeContext);
  return (
    <Stack spacing={2} direction="row">
      <div style={{marginTop: "40px", width: "100%"}}>
        <StyledModalButton theme={theme}variant="contained" onClick={onClick}>{text}</StyledModalButton>
      </div>
      
    </Stack>
  );
}
