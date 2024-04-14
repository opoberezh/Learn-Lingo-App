import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';

const StyledButton = styled(Button)`
  color: ${({ styled }) => styled.color || 'inherit'};
`;

export default function BasicButton({ text, onClick, variant, styled }) {
  return (
    <Stack spacing={2} direction="row">
      <StyledButton variant={variant} onClick={onClick} styled={styled}>
        {text}
      </StyledButton>
    </Stack>
  );
}
