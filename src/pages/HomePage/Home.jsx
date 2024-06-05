import { Link } from 'react-router-dom';
import {
  Container,
  Title,
  HeroWrapper,
  StyledSpan,
  Text,
  SignUpButton,
  PicsWrapper,
  TextWrapper,
  EmojiImg,
  MacImg,
  Wrapper,
  IndexesWrapper,
  IndexesList,
  Numbers,
  Description,
  DivStyled,
  
  SecondDescWrapper,
  SecondNumber,
  ThirdAndForthNumbers,
  SecondDescription,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <Container>
      <Wrapper>
        <HeroWrapper>
          <Title>
            Unlock your potential with the best{' '}
            <StyledSpan>language </StyledSpan>
            tutors
          </Title>

          <TextWrapper>
            <Text>
              Embark on an Exciting Language Journey with Expert Language
              Tutors: Elevate your language proficiency to new heights by
              connecting with highly qualified and experienced tutors.
            </Text>
          </TextWrapper>
<Link to="/teachers"><SignUpButton type="submit">Get started</SignUpButton>
</Link>
          
        </HeroWrapper>
        <PicsWrapper>
          <EmojiImg
            src="/assets/sticker%201.png"
            alt="Emoji of a girl with curly hair"
            width={339}
            height={339}
          />
          <MacImg src="/assets/Mac.png" alt="MacBook" width={391} />
        </PicsWrapper>
      </Wrapper>

      <IndexesWrapper>
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

              <Description>5-star tutor reviews</Description>
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

export default HomePage;
