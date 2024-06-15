import styled from "@emotion/styled";
import Button from "@mui/material/Button";

export const StyledModalButton = styled(Button)`

  display: inline-block;
  width: 100%;
  height: 60px;
text-transform: none;
  padding: 16px;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  background-color: #f4c550;
box-shadow: none;

  font-weight: 700;
  font-size: 18px;
  color: #121417;

  transition: background-color 0.3s;

  &:hover,
  &:focus {
    background-color: #fbe9ba;
  }
`;
