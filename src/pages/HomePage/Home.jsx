import {
  Container,
  Title,
  HeroWrapper,
  StyledSpan,
  TextWrapper,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <Container>
      <HeroWrapper>
        <Title>
          Unlock your potential with the best <StyledSpan>language </StyledSpan>
          tutors
        </Title>
      </HeroWrapper>
      <TextWrapper>
        <p>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
      </TextWrapper>
    </Container>
  );
};

export default HomePage;
