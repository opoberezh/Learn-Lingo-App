import styled from '@emotion/styled';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  border-radius: 24px;
  padding: 20px;
  width: 100%;
  height: auto;
  max-width: 375px;

  @media (min-width: 1312px) {
    padding: 24px;
    width: 1184px;
    height: ${({ isExpanded }) => (isExpanded ? '748px' : '328px')};
    gap: 48px;
  }
`;

export const AvatarCircle = styled.div`
  width: 120px;
  height: 120px;
  border: 3px solid ${({ theme }) => theme.secondary};
  border-radius: 50%;
  align-content: center;
  padding: 8px;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  flex-wrap: wrap;

  @media (min-width: 1312px) {
    gap: 149px;
  }
`;

export const FirstList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  & > li {
    flex-basis: calc(50% - 32px);
  }
  gap: 8px;
  justify-content: space-;

  @media (min-width: 1312px) {
    gap: 16px;
    & > li:not(:last-child) {
      border-right: 1px solid #12141733;
      margin-right: 16px;
      padding-right: 16px;
    }
  }
`;

export const FirstListTest = styled.p`
  font-weight: 500;
  font-size: 12px;

  @media (min-width: 1312px) {
    font-size: 16px;
  }
`;

export const SecondaryText = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #8a8a89;
`;

export const IconOpenBook = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #121417;
  margin-right: 4px;
  vertical-align: middle;

  @media (min-width: 1312px) {
    width: 16px;
    height: 16px;
  }
`;

export const IconStar = styled.svg`
  width: 12px;
  height: 12px;
  fill: #ffc531;
  stroke: #ffc531;
  margin-right: 8px;
  vertical-align: text-top;

  @media (min-width: 1312px) {
    width: 16px;
    height: 16px;
  }
`;

export const SpanText = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: #8a8a89;
`;

export const SpanPrice = styled.span`
  color: #38cd3e;
`;

export const NameText = styled.p`
  font-weight: 500;
  font-size: 24px;
  margin-top: 16px;
  @media (min-width: 1312px) {
    margin-top: 8px;
  }
`;

export const SecondList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  gap: 8px;
`;

export const UnderlinedText = styled.span`
  text-decoration: underline;
`;

export const ReadMoreButton = styled.button`
  font-weight: 500;
  font-size: 16px;
  text-decoration: underline;
  background-color: transparent;
  border: none;
  margin-top: 16px;
  cursor: pointer;

  transition: color 0.3s;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.primary};
  }
`;

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  margin-top: 24px;
  @media (min-width: 1312px) {
    flex-direction: row;
    margin-top: 32px;
  }
`;

export const RadioInputWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  min-width: 110px;
  height: 32px;
  border: 1px solid #12141733;
  border-radius: 35px;
  padding: 8px 12px;
  background-color: ${({ checked, theme }) =>
    checked ? theme.primary : '#fff'};
  cursor: pointer;

  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }
`;

export const RadioInput = styled.input`
  display: none;
`;

export const FavoriteButton = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  top: 24px;
  right: 24px;
`;

export const FavoriteIcon = styled.svg`
  fill: ${({ isFavorite, theme }) =>
    isFavorite ? theme.primary : 'transparent'};
  stroke: ${({ isFavorite, theme }) =>
    isFavorite ? theme.primary : '#121417'};
  width: 26px;
  height: 26px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 32px;
  @media (min-width: 1312px) {
    width: 232px;
  }
`;
