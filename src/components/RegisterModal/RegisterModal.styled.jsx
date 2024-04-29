import styled from '@emotion/styled';

export const Button = styled.button`
  width: 166px;
  height: 48px;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  background-color: #121417;
  color: #fff;

  font-size: 16px;
  font-weight: 700;
  transition:
    color 0.3s,
    background-color 0.3s;

  &:hover,
  &:focus {
    color: #f4c550;
    background-color: #fbe9ba;
  }
`;
