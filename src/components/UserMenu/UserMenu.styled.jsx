import styled from "@emotion/styled";

export const LogOutButton = styled.button`
  display: inline-flex;
  min-width: 100px;
  cursor: pointer;
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

export const IconWrapper = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`;

export const UserMailDiv = styled.div`
display: flex;
align-items: center;
    justify-content: center;
width: 166px;
height: 48px;


border-radius: 12px;
background-color: #121417;

`;

export const UserMail = styled.p`
color: #fff;

font-size: 16px;
font-weight: 700;
`;