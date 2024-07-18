
import  { createContext, useState } from 'react';
import { OrangeTheme, GreenTheme, BlueTheme, RedTheme, PinkTheme } from './themes';

export const ThemeContext = createContext();
const themes = [OrangeTheme, GreenTheme, BlueTheme, RedTheme, PinkTheme];

const ThemeProvider = ({ children }) => {
  const [themeIndex, setThemeIndex] = useState(0);

  const toggleTheme = () => {
    setThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };


  return (
    <ThemeContext.Provider value={{ theme: themes[themeIndex], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
