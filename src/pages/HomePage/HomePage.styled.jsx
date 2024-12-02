import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 20px auto;
  width: 90%;

  @media (min-width: 375px) {
    max-width: 375px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
    flex-direction: row;
    gap: 20px;
    margin: 20px 0;
  }
  @media (min-width: 1320px) {
    width: 1312px;

    margin: 20px auto;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 225px;
  margin-top: 40px;

  @media (min-width: 768px) {
    max-width: 267px;
    margin-top: 64px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  background-color: #f8f8f8;
  padding: 20px 16px;
  align-items: center;
  height: 399px;
  @media (min-width: 768px) {
    padding: 40px 30px;

    max-width: 347px;
    flex-grow: 1;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;

  @media (min-width: 1312px) {
    font-size: 48px;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  max-width: 335px;
  margin-top: 20px;

  @media (min-width: 1312px) {
    max-width: 471px;
    margin-top: 32px;
  }
`;

export const Text = styled.p`

  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 1312px) {
    font-size: 16px;
  }
`;

export const StyledSpan = styled.span`
  font-weight: 400;
  background: ${({ theme }) => theme.primary};
  font-style: italic;
  display: inline-block;
  padding: 0 5px;
  border-radius: 12px;
`;

export const PicsWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 375px;
  height: 399px;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 30px;

  @media (min-width: 768px) {
    max-width: 347px;
    height: 391px;
    // height: 530px;
  }
`;

export const ThemeSwitcherWrapper = styled.div`
  position: absolute;
  top: 15px;
  right: 10px;
`;

export const EmojiImg = styled.img`
  position: absolute;
top: 150px;
  width: 180px;
  height: 180px;
  @media(min-width: 375px){
  top: 80px;
  width: 228px;
  height: 228px;
  }
  

  @media (min-width: 1312px) {
    width: 339px;
    height: 339px;
  }
`;

export const MacImg = styled.img`
  position: absolute;
  z-index: 1;
top: 300px;
  width: 220px;
  @media(min-width: 375px){
  top: 281px;
  width: 260px;
  }
  

  @media (min-width: 1312px) {
    width: 391px;
    top: 354px;
  }
`;

export const IndexesWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 720px;
  // padding: 40px 20px;
  
 

  @media (min-width: 1312px) {
    max-width: 1312px;
    height: 116px;
    margin-top: 24px;
    padding: 40px 122px;
  }
`;

export const DashedFrame = styled.img`
  display: none;

 

  @media (min-width: 768px) {
  display: block;
    max-width: 720px;
     height: 80px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  }
`;

export const IndexesList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  
  
`;

export const DivStyled = styled.div`
  display: flex;
  gap: 8px;
      align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    border: 1.5px double;
  border-color: ${({ theme }) => theme.primary};
  border-radius: 30px;
`;

export const Numbers = styled.p`
width: 105px;

  font-size: 20px;
  font-weight: 500;
@media(min-width: 768px){
width: 87px;
  font-size: 22px;
  
}
  
`;

export const Description = styled.p`
color: #121417b2;
font-size: 10px;

@media(min-width: 768px){
width: 96px;
 
  
}
  
`;

export const DescWrapper = styled.div``;

export const SecondNumber = styled.p`

font-size: 20px;
  font-weight: 500;
@media(min-width: 768px){
width: 100px;
  font-size: 22px;

}
  
`;

export const ThirdAndForthNumbers = styled.p`
  width: 60px;
  font-size: 20px;
  font-weight: 500;
`;

export const SecondDescWrapper = styled.div`
  width: 74px;
  font-size: 10px;
  font-weight: 400;
  color: #121417b2;
`;

export const SecondDescription = styled.p`
 font-size: 10px;
  color: #121417b2;
@media(min-width: 768px){
width: 54px;
  font-size: 12px;
 
}
  
`;
