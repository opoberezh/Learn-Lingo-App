import styled from "@emotion/styled";
import Button from "@mui/material/Button";

const sizeStyles = {
  small: `
    width: 183px;
    height: 60px;
  `,
  medium: `
    width: 232px;
    height: 60px;
  `,
  large: `
    width: 267px;
    height: 60px;
  `
};

export const StyledButtonBasic = styled(Button)`
${({ size }) => sizeStyles[size]}
  display: inline-block;
  width: 438px;
  height: 60px;
text-transform: none;
  padding: 16px;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  background-color: #f4c550;

  font-weight: 700;
  font-size: 18px;
  color: #121417;

  transition: background-color 0.3s;

  &:hover,
  &:focus {
    background-color: #fbe9ba;
  }
`;
