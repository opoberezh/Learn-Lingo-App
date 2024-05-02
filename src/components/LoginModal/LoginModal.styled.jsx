import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const Button = styled.button`
  width: 166px;
  height: 48px;

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
    color: #121417;
    background-color: #fbe9ba;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: 4px;
`;

export const StyledField = styled(Field)`
  margin-top: 18px;
  width: 438px;
  height: 54px;
  border-radius: 12px;
  border: 1px solid #1214171a;
  padding: 16px;
  font-size: 16px;
  color: #121417;
`;

export const ErrorMessageStyled = styled.div`
  font-size: 11px;
  font-weight: 400;
  margin: 0 0 0 16px;
  color: #900c3f;
`;

export const SignUpButton = styled.button`
  display: inline-block;
  width: 438px;
  height: 60px;
  margin-top: 28px;
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
