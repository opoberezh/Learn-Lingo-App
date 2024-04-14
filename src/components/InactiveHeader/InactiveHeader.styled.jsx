import styled from '@emotion/styled';

export const InactiveHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1440px;
  height: 88px;
  padding: 20px 128px;
  gap: 268px;
`;

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 390px;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
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

export const Text = styled.p`
  font-size: 16px;
  line-height: 20px;
  margin: 0;
`;
