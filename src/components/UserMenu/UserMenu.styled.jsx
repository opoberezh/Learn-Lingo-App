import styled from "@emotion/styled";

export const LogOutButton = styled.button`
  display: inline-flex;
  min-width: 100px;
  cursor: pointer;
  padding: 0;
  border: none;
  background-color: transparent;
  font-size: 22px;
  font-weight: 700;
  transition: color 0.3s;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.primary};
  }
@media (min-width: 1312px){
font-size: 16px;
}
`;

export const Authentication = styled.div`
 display: flex;
 
@media(min-width: 1312px){
 width: 255px;
  gap: 16px;
  flex-direction: row;
}
 
 
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
 gap: 8px;
 margin: 40px 0;

@media(min-width: 1312px){

  flex-wrap: nowrap;
}

  
`;

export const StyledIcon = styled.svg`
width: 24px;
  height: 24px;
 stroke: ${({ theme }) => theme.primary};
  margin-right: 8px;
@media(min-width: 1312px){
width: 20px;
  height: 20px;
}
  
 
`;

export const UserMailDiv = styled.div`
  width: 100%; 
  max-width: 169px; 
  height: 48px;
  border: none;
  border-radius: 12px;
  background-color: #121417;
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  transition: color 0.3s, background-color 0.3s;
  display: flex; 
  align-items: center; 
  justify-content: center; 

  &:hover,
  &:focus {
    color: #121417;
    background-color: ${({ theme }) => theme.primary};
  }

  @media(min-width: 1312px){
    width: 100%;
    max-width: 166px;
    font-size: 16px;
  }
`;
export const UserMail = styled.p`
color: #fff;
font-size: 22px;
font-weight: 700;
@media(min-width: 1312px){
font-size: 16px;
}

`;