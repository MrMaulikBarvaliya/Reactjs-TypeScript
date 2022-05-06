import React, { useState } from "react";

type Theme = "light" | "dark";
type ThemeContexts = { theme: Theme; toggleTheme: () => void };

export const ThemeContext = React.createContext<ThemeContexts>(
  {} as ThemeContexts
);

export const ThemeProvider = ({ children }: any) => {
 
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const color = theme === "light" ? "#000" : "#FFF";
  const backgroundColor = theme === "light" ? "#FFF" : "#333";

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
