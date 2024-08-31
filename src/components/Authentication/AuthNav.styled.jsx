import styled from '@emotion/styled';

export const Authentication = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  
flex-direction: column;
margin: 80px 0;
  @media(min-width: 1312px){
  width: 255px;
  gap: 16px;
  align-items: center;
  }
  
`;

export const LoginButton = styled.button`
  display: inline-flex;
  align-items: center;
  min-width: 80px;
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

 @media(min-width: 1312px){
 
  font-size: 16px;
  
} 
`;

export const Button = styled.button`
width: 169px;
  height: 48px;
  border: none;
  border-radius: 12px;
  background-color: #121417;
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  transition: color 0.3s, background-color 0.3s;

  &:hover,
  &:focus {
    color: #121417;
    background-color: ${({ theme }) => theme.primary};
  }

@media(min-width: 1312px){
 width: 166px;
  font-size: 16px;
  
}
 

`;

export const StyledIcon = styled.svg`

width: 24px;
  height: 24px;
  margin-right: 8px;
 stroke: ${({ theme }) => theme.primary};
@media(min-width: 1312px){
width: 20px;
  height: 20px;
  
}
  
 
  
`;
