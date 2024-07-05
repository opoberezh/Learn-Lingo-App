import styled from "@emotion/styled";
import Select from "react-select";

export const FilterBarContainer = styled.div`
display: flex;
margin: 20px auto;
width: 1184px;

`;

export const FilterBarForm = styled.form`
display: flex;
width: 583px;
height: 74px;
gap: 20px;
`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
`;

export const LabelStyled = styled.label`
font-weight: 500;
font-size: 14px;
color: #8A8A89;
`;

export const StyledSelectLang = styled(Select)`

  

  .react-select__control {
   
 appearance: none;
   width: 221px;
  height: 48px; 
  outline: none;
  border: none;
    background-color: #ffffff;
   
    border-radius: 14px;
    padding: 2px 8px;
    min-height: 48px;
  }

  .react-select__input {
    color: #ffffff;
  }

   .react-select__single-value {
     color:  #121417;
}

  .react-select__menu {
    background-color: #ffffff;
    border-radius: 14px;
   z-index: 999;
   color: #12141733;
   font-weight: 500;
   font-size: 18px;
   scroll: none;

  }

  .react-select__option {
    background-color: transparent;
    

    &.react-select__option--is-focused {
     
      background-color: transparent;

    }

    &.react-select__option--is-selected {
     
      color: #121417;
    }
  }

  .react-select__placeholder {
    color: #8a8a89;
  }
`;



export const StyledLevelsSelect = styled(Select)`

  

  .react-select__control {

   width: 198px;
  height: 48px; 
  outline: none;
  border: none;
    background-color: #ffffff;
   
    border-radius: 14px;
    padding: 2px 8px;
    min-height: 48px;
  }

  .react-select__input {
    color: #ffffff;
  }

   .react-select__single-value {
     color:  #121417;
}

  .react-select__menu {
    background-color: #ffffff;
    border-radius: 14px;
   z-index: 999;
   color: #12141733;
   font-weight: 500;
   font-size: 18px;
   scroll: none;

  }

  .react-select__option {
    background-color: transparent;
    

    &.react-select__option--is-focused {
     
      background-color: transparent;

    }

    &.react-select__option--is-selected {
     
      color: #121417;
    }
  }

  .react-select__placeholder {
    color: #8a8a89;
  }
`;



export const PriceSelect = styled(Select)`

  

  .react-select__control {

   width: 150px;
  height: 48px; 
  outline: none;
  border: none;
    background-color: #ffffff;
   
    border-radius: 14px;
    padding: 2px 8px;
    min-height: 48px;
  }

  .react-select__input {
    color: #ffffff;
  }

   .react-select__single-value {
     color:  #121417;
}

  .react-select__menu {
    background-color: #ffffff;
    border-radius: 14px;
   z-index: 999;
   color: #12141733;
   font-weight: 500;
   font-size: 18px;
   scroll: none;

  }

  .react-select__option {
    background-color: transparent;
    

    &.react-select__option--is-focused {
     
      background-color: transparent;

    }

    &.react-select__option--is-selected {
     
      color: #121417;
    }
  }

  .react-select__placeholder {
    color: #8a8a89;
  }
`;

