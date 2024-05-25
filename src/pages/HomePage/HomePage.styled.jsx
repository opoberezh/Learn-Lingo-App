import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
 
  margin-top: 20px;
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 24px;
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 98px 64px;
  background-color: #f8f8f8;
  width: 720px;
  height: 530px;
  border-radius: 30px;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 500;
`;

export const TextWrapper = styled.div`
  width: 471px;
  margin-top: 32px;
`;

export const Text = styled.p``;

export const StyledImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;

export const StyledSpan = styled.span`
  font-weight: 400;
  background: #fbe9ba;
  font-style: italic;
`;

export const SignUpButton = styled.button`
  display: inline-block;
  width: 267px;
  height: 60px;
  margin-top: 64px;
  padding: 16px;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  background-color: #f4c550;
  font-weight: 700;
  font-size: 18px;
  color: #121417;
  transition: background-color 0.3s;

  &:hover,
  &:focus {
    background-color: #fbe9ba;
  }
`;

export const PicsWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 568px;
  height: 530px;
  background-color: #fbe9ba;
  border-radius: 30px;
`;

export const EmojiImg = styled.img`
  position: absolute;
  top: 80px;
`;

export const MacImg = styled.img`
  position: absolute;
  z-index: 1;
  top: 354px;
`;

export const IndexesWrapper = styled.div`
  display: flex;

  width: 1312px;
  height: 116px;
  margin-top: 24px;
  padding: 40px 122px;
  border: 1.5px dashed #f4c550;

  border-radius: 30px;
`;

export const IndexesList = styled.ul`
  display: flex;
  gap: 100px;
`;

export const DivStyled = styled.div`
display: flex;
gap: 16px;

`;



export const Numbers = styled.p`
width: 110px;
  font-size: 28px;
  font-weight: 500px;
`;



export const Description = styled.p`
width: 96px;
  font-size: 14px;
  color: #121417b2;
`;

export const DescWrapper = styled.div`
 
`;

export const SecondNumber = styled.p`
width: 130px;
  font-size: 28px;
  font-weight: 500px;
`;


export const ThirdAndForthNumbers = styled.p`
width: 80px;
  font-size: 28px;
  font-weight: 500px;
`;
export const SecondDescWrapper = styled.div`
width: 74px;
font-size: 14px;
  font-weight: 400;
  color: #121417b2;
`;

export const SecondDescription = styled.p`
width: 74px;
  font-size: 14px;
  color: #121417b2;
`;