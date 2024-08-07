import styled from '@emotion/styled';
import { Form, Field } from 'formik';


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
  outline: none;

  &:hover,
&:focus {
      border-color: ${({ theme }) => theme.primary};
    }

  
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
