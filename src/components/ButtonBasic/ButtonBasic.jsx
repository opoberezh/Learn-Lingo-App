import Stack from '@mui/material/Stack';
import { StyledButtonBasic } from './ButtonBasic.styled';



const ButtonBasic = ({ text, onClick, size }) => {
  return (
    <Stack spacing={2} direction="row">
      <div style={{marginTop: "40px", }}>
        <StyledButtonBasic variant="contained" onClick={onClick} size={size}>{text}</StyledButtonBasic>
      </div>
      
    </Stack>
  );
}

export default ButtonBasic