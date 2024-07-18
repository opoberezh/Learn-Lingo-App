
import  { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import sprite from '../../../assets/symbol.svg';
import { StyledIcon, ToggleButton } from './ThemeSwidcher.styled';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ToggleButton 
    theme={theme}
    onClick={toggleTheme}>
      <StyledIcon theme={theme}>
      <use xlinkHref={`${sprite}#icon-paint-format`} />
      </StyledIcon>
    </ToggleButton>
  );
};

export default ThemeSwitcher;
