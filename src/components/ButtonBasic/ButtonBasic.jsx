import Stack from '@mui/material/Stack';
import { StyledButtonBasic } from './ButtonBasic.styled';
import { ThemeContext } from '../../ThemeProvider';
import { useContext } from 'react';



const BasicButton = ({ text, onClick}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Stack spacing={2} direction="row">
     
        <StyledButtonBasic theme={theme}variant="contained" onClick={onClick} >{text}</StyledButtonBasic>
      
      
    </Stack>
  );
}

export default BasicButton;