
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={{ backgroundColor: theme.primary, color: theme.secondary }}>
        Current Theme
      </div>
    </div>
  );
};

export default ThemeSwitcher;
