import styled from '@emotion/styled';


export const CardContainer = styled.div`
display: flex;
// align-items: center;
background-color: #F8F8F8;
    border-radius: 24px;
    padding: 24px;
    width: 1184px;
    height: 328px;
    gap: 48px;

`;


export const AvatarCircle = styled.div`
width: 120px;
height: 120px;
border: 3px solid #FBE9BA;
border-radius: 50%;
align-content: center;
    padding: 8px;
`;

export const ListWrapper = styled.div`
display: flex;
gap: 149px;
`;


export const FirstList = styled.ul`
display: flex;
flex-direction: row;

& > li:not(:last-child) {
    border-right: 1px solid #12141733;
    margin-right: 16px;
    padding-right: 16px;
  }
`;

export const FirstListTest = styled.p`
font-weight: 500;
font-size: 16px;
`;

export const SecondaryText = styled.p`
font-weight: 500;
font-size: 16px;
color: #8A8A89;
`; 

export const IconOpenBook = styled.svg`
width: 16px;
height: 16px;
fill: transparent;
stroke: #121417;
margin-right: 4px;
vertical-align: middle;
`;

export const IconStar = styled.svg`
width: 16px;
height: 16px;
fill: #FFC531;
stroke: #FFC531;
margin-right: 8px;
vertical-align: text-top;
`;

export const SpanText = styled.span`
font-weight: 500;
font-size: 16px;
color: #8A8A89;

`;

export const SpanPrice = styled.span`
color: #38CD3E;
`;

export const NameText = styled.p`
font-weight: 500;
font-size: 24px;
margin-top: 8px;
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
    color: #F4C550;
  }
`;

export const RadioContainer = styled.div`
  display: flex;
 
  gap: 8px;
  margin-top: 32px;
`;

export const RadioInputWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const RadioInput = styled.input`
  appearance: none;
  min-width: 110px;
  height: 32px;
  border: 1px solid #12141733;
  border-radius: 35px 0px 0px 0px;
  padding: 8px 12px;
  background-color: transparent;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:checked {
    background-color: #F4C550;
  }

  &:before {
    content: attr(data-label);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
`;