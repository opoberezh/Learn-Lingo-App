import styled from '@emotion/styled';

export const Authentication = styled.div`
  display: flex;
  width: 255px;
  gap: 16px;
`;

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;

  margin-right: 8px;
`;

export const LoginButton = styled.button`
  display: inline-flex;
  min-width: 80px;
  padding: 0;
  border: none;
  background-color: transparent;
  font-size: 16px;
  font-weight: 700;
  transition: color 0.3s;

  &:hover,
  &:focus {
    color: #f4c550;
  }
`;

export const Button = styled.button`
  width: 166px;
  height: 48px;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  background-color: #121417;
  color: #fff;
  transition:
    color 0.3s,
    background-color 0.3s;

  &:hover,
  &:focus {
    color: #f4c550;
    background-color: #fbe9ba;
  }
`;
