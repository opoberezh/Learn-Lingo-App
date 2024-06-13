import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const TeacherInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  gap: 14px;
`;

export const TeacherAvatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SecondaryText = styled.p`
  font-weight: 500;
  font-size: 12px;
  color: #8a8a89;
`;

export const TeacherName = styled.p`
  font-weight: 500;
  font-size: 16px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const RadioGroupTitle = styled.div`
  font-weight: 500;
  font-size: 24px;
`;

export const RadioGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 16px;
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledField = styled(Field)`
  appearance: none;
  min-width: 20px;
  min-height: 20px;

  background-color: #fff;

  border: 2px solid #1214171a;
  border-radius: 50%;
  transition:
    background 0.3s,
    border 0.3s;

  &:checked {
    background: radial-gradient(circle, #f4c550 40%, transparent 50%);
    border: 2px solid #f4c550;
  }
`;

export const FormWrapper = styled.div`
display: flex;
flex-direction: column;
margin-top: 40px;
gap: 18px;
`;

export const FormField = styled(Field)`
width: 100%;
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

export const BookingButton = styled.button`
  display: inline-block;
  width: 100%;
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

