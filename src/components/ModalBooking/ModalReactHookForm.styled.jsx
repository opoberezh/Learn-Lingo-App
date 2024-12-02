import styled from '@emotion/styled';

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

export const StyledForm = styled.form`
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

export const StyledRadioInput = styled.input`
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
    background: radial-gradient(circle, ${({theme})=> theme.primary} 40%, transparent 50%);
    border: 2px solid ${({theme})=> theme.primary};
  }
`;

export const FormWrapper = styled.div`
display: flex;
flex-direction: column;
margin-top: 40px;
gap: 18px;
`;

export const FormInput = styled.input`
width: 100%;
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