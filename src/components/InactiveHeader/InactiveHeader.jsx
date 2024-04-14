import {
  InactiveHeaderContainer,
  Logo,
  LogoName,
  LogoWrapper,
  PageWrapper,
  Text,
  TextWrapper,
} from './InactiveHeader.styled';

import inactiveUkraine from '../../assets/inactiveUkraine.svg';
import AuthNav from '../AuthNav/AuthNav';

const InactiveHeader = () => {
  return (
    <InactiveHeaderContainer>
      <PageWrapper>
        <LogoWrapper>
          <Logo src={inactiveUkraine} alt="Ukraine Flag" />
          <LogoName>LearnLingo</LogoName>
        </LogoWrapper>
        <TextWrapper>
          <Text>Home</Text>
          <Text>Teachers</Text>
        </TextWrapper>
      </PageWrapper>
      <AuthNav />
    </InactiveHeaderContainer>
  );
};

export default InactiveHeader;
