import {
  AuthNavWrapper,
  InactiveHeaderContainer,
  LogInWrapper,
  LoginText,
  LogoName,
  LogoWrapper,
  PageWrapper,
  RegisterContainer,
  Text,
  TextWrapper,
} from './InactiveHeader.styled';

import sprite from "../../../assets/symbol.svg";


const InactiveHeader = () => {
  return (
    <InactiveHeaderContainer>
      <PageWrapper>
        <LogoWrapper>
          <svg style={{ width: "28px", height: "28px", fill: "#8A8A89" }}>
            <use xlinkHref={`${sprite}#icon-ukraine`} />
          </svg>
          <LogoName>LearnLingo</LogoName>
        </LogoWrapper>
        <TextWrapper>
          <li>
          <Text>Home</Text>
          </li>
          <li>
          <Text>Teachers</Text>
          </li>
         
        </TextWrapper>
      </PageWrapper>
      <AuthNavWrapper>
      <LogInWrapper> 
       <svg style={{ width: "20px", height: "20px" }}>
        <use xlinkHref={`${sprite}#icon-login_inact`} />
      </svg>  
      <LoginText>Log in</LoginText>
      </LogInWrapper>
      <RegisterContainer>
        <p>Registration</p>
      </RegisterContainer>
     
      </AuthNavWrapper>
     
     
    </InactiveHeaderContainer>
  );
};

export default InactiveHeader;
