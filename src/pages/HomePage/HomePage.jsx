import { Link } from 'react-router-dom';
import {
  Container,
  Title,
  HeroWrapper,
  StyledSpan,
  Text,
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
  DashedFrame,
} from './HomePage.styled';
import BasicButton from '../../components/ButtonBasic/ButtonBasic';
import emoji from "../../../assets/emoji.png";

import { ThemeContext } from '../../ThemeProvider';
import { useContext } from 'react';

const HomePage = () => {
  const { theme } = useContext(ThemeContext);
  const macBookImg = theme?.macBookImg || "../../../assets/Mac.png"; 
  const rectangleImg = theme?.rectangleImg || "../../../assets/Rectangle 1.png"; 
  
  return (
    <Container>
      <Wrapper>
        <HeroWrapper>
          <Title>
            Unlock your potential with the best{' '}
            <StyledSpan theme={theme}>language </StyledSpan>
            {' '}tutors
          </Title>

          <TextWrapper>
            <Text>
              Embark on an Exciting Language Journey with Expert Language
              Tutors: Elevate your language proficiency to new heights by
              connecting with highly qualified and experienced tutors.
            </Text>
          </TextWrapper>
          <Link to="/teachers">
            <div style={{ marginTop: "64px", width: "267px" }}>
              <BasicButton type="submit" text="Get started" />
            </div>
          </Link>
        </HeroWrapper>
        <PicsWrapper theme={theme}>
          <EmojiImg
            src={emoji}
            alt="Emoji of a girl with curly hair"
            width={339}
            height={339}
          />
          <MacImg theme={theme} src={macBookImg} alt="MacBook" width={391} />
        </PicsWrapper>
      </Wrapper>

      <IndexesWrapper>
        <DashedFrame theme={theme} src={rectangleImg} alt='Dashed frame' />
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
