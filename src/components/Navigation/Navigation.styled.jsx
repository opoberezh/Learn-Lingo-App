import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 661px;

  gap: 390px;
`;

// export const LogoWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   width: 133px;
//   height: 28px;
//   gap: 8px;
// `;

export const StyledLink = styled(Link)`
  display: flex;
  gap: 8px;
  padding: 8px 8px;
  color: #121417;
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover,
  &:focus {
    color: #f4c550;
  }
`;

export const Logo = styled.img`
  width: 28px;
  height: 28px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  width: 138px;
  gap: 28px;
`;
export const LinkStyled = styled(Link)`
  display: flex;
  gap: 8px;
  padding: 8px 8px;
  color: #121417;
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover,
  &:focus {
    color: #f4c550;
  }
`;
