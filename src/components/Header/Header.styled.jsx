import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1440px;
  height: 88px;
  padding: 40px 128px;
  gap: 268px;
`;

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 390px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 133px;
  height: 28px;
  gap: 8px;
`;

export const Logo = styled.img`
  width: 28px;
  height: 28px;
`;

export const LogoName = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 20px;
  transition: color 0.3s;

  &:hover,
  &:focus {
    color: #367fd8;
  }
`;
export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 138px;
  height: 20px;
  gap: 12px;
`;

export const StyledLink = styled(Link)`
  padding: 8px 8px;
  color: #121417;

  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  transition: color 0.3s;

  &:hover,
  &:focus {
    color: #f4c550;
  }
`;

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const LogOutButton = styled.button`
  display: inline-flex;
  min-width: 80px;
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

export const IconWrapper = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`;

export const LoginText = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
`;

export const Authentication = styled.div`
  display: flex;
  width: 255px;
  gap: 16px;
`;

export const Button = styled.button`
  width: 166px;
  height: 48px;
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
