import Stack from '@mui/material/Stack';
import { StyledButtonBasic } from './ButtonBasic.styled';



const BasicButton = ({ text, onClick}) => {
  return (
    <Stack spacing={2} direction="row">
     
        <StyledButtonBasic variant="contained" onClick={onClick} >{text}</StyledButtonBasic>
      
      
    </Stack>
  );
}

export default BasicButton;