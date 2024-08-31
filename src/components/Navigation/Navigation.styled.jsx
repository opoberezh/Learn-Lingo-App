import { Link, NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Nav = styled.nav`
display: flex;
flex-direction: column;
  align-items: center;
 width: 100%;
 gap: 80px;
align-items: flex-start;
@media(min-width: 1312px){
flex-direction: row;
  width: 661px;
  gap: ${({ isLoggedIn }) => (isLoggedIn ? '330px' : '370px')};
}
   
`;

export const StyledLink = styled(Link)`
  display: flex;
  gap: 8px;
  // padding: 8px 8px;
  color: #121417;
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover,
  &:focus {
    color: ${({theme})=> theme.primary};
  }
`;

export const Logo = styled.img`
  width: 28px;
  height: 28px;
`;

export const LinkWrapper = styled.div`
display: flex;
    flex-direction: column;
    gap: 28px;
@media(min-width: 1312px){
width: 138px;
  gap: 28px;
      flex-direction: row;
}
  
  
`;
export const LinkStyled = styled(NavLink)`
display: flex;
 font-size: 22px;
 
  padding: 8px 8px;
  color: #121417;
  font-weight: 400;
cursor: pointer;
  transition: color 0.3s;

&:hover,
  &:focus {
    color: ${({theme})=> theme.primary};
  }

  &.active {
    color: ${({theme})=> theme.primary};
  }

@media(min-width: 1312px){

  gap: 8px;
  font-size: 16px;
}
  
  

  
`;