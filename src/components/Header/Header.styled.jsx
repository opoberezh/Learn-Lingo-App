import styled from '@emotion/styled';
import { Link } from 'react-router-dom';


export const HeaderWrapper = styled.header`
visibility: hidden;

@media(min-width: 769px){
visibility: visible;
display: flex;
  align-items: center;

  width: 1184px;
  height: 48px;
  margin: 0 auto;

  gap: 268px;
}
  
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 64px;
  color: #121417;
  font-weight: 500;
  font-size: 30px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover,
  &:focus {
    color: ${({theme})=> theme.primary};
  }
    @media(min-width: 769px){
    display: none;
    }
`;

export const Logo = styled.img`
  width: 28px;
  height: 28px;
`;

