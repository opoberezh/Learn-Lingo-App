import styled from '@emotion/styled';

export const Authentication = styled.div`
  display: flex;
  align-items: center;
  width: 255px;
  gap: 16px;
`;

export const LoginButton = styled.button`
  display: inline-flex;
  align-items: center;
  min-width: 80px;
  padding: 0;
  border: none;
  background-color: transparent;
  font-size: 16px;
  font-weight: 700;
  transition: color 0.3s;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.primary};
  }
`;

export const Button = styled.button`
  width: 166px;
  height: 48px;
  border: none;
  border-radius: 12px;
  background-color: #121417;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  transition: color 0.3s, background-color 0.3s;

  &:hover,
  &:focus {
    color: #121417;
    background-color: ${({ theme }) => theme.primary};
  }
`;

export const StyledIcon = styled.svg`
  width: 20px;
  height: 20px;
  stroke: ${({ theme }) => theme.primary};
  margin-right: 8px;
`;
