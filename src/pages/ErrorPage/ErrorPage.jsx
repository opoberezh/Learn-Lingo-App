import { Container, DashedFrame, Description, DivStyled, FakeButton, HeroWrapper, IndexesList, IndexesWrapper, Numbers, PicsWrapper, SecondDescWrapper, SecondDescription, SecondNumber, StyledSpan, Text, TextWrapper, ThirdAndForthNumbers, Title, Wrapper } from './ErrorPage.styled';
import image from "../../../assets/image.png";
import rectangleGray from "../../../assets/RectangleGray.png";


const ErrorPage = () => {
  return (
    <Container>
    <Wrapper>
      <HeroWrapper>
        <Title>
          Unlock your potential with the best{' '}
          <StyledSpan>language</StyledSpan>
          {' '}tutors
        </Title>

        <TextWrapper>
          <Text>
            Embark on an Exciting Language Journey with Expert Language
            Tutors: Elevate your language proficiency to new heights by
            connecting with highly qualified and experienced tutors.
          </Text>
        </TextWrapper>

<FakeButton>
  <p>Get started</p>
</FakeButton>


        
      </HeroWrapper>
      <PicsWrapper>
        <img src={image} alt='Default picture'/>
      </PicsWrapper>
    </Wrapper>

    <IndexesWrapper>
    <DashedFrame src={rectangleGray} alt='Dashed frame' />
      <IndexesList>
        <li>
          <DivStyled>
            <Numbers>32,000 +</Numbers>

            <Description>Experienced tutors</Description>
          </DivStyled>
        </li>
        <li>
          <DivStyled>
            <SecondNumber>300,000 +</SecondNumber>

            <Description>5-star  tutor reviews</Description>
          </DivStyled>
        </li>
        <li>
          <DivStyled>
            <ThirdAndForthNumbers>120 +</ThirdAndForthNumbers>
            <SecondDescWrapper>Subjects taught</SecondDescWrapper>
          </DivStyled>
        </li>
        <li>
          <DivStyled>
            <ThirdAndForthNumbers>200 +</ThirdAndForthNumbers>
            <SecondDescription>Tutor nationalities</SecondDescription>
          </DivStyled>
        </li>
      </IndexesList>
    </IndexesWrapper>
  
  </Container>
);
};
 


export default ErrorPage;
