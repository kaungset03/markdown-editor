import { createContext } from "react";

const initialState: ThemeContextType = {
  theme: "system",
  setTheme: () => {},
};

const ThemeContext = createContext(initialState);

export default ThemeContext;
