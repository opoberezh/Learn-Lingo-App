import { createContext, useState } from "react"
import { BlueTheme, GreenTheme, OrangeTheme, PinkTheme, RedTheme } from "./theme";


export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
const [theme, setTheme] = useState(OrangeTheme);

const toggleTheme = () => {
  setTheme(currentTheme => {
    switch (currentTheme) {
case OrangeTheme:
  return GreenTheme;
  case GreenTheme:
    return BlueTheme;
    case BlueTheme:
      return RedTheme;
      case RedTheme:
        return PinkTheme;
        case PinkTheme:
          return OrangeTheme;
          default:
            return OrangeTheme;
    }
  })
}
  return (
   <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
  )
}

export default ThemeProvider