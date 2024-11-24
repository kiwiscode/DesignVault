import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(() => {
    return localStorage.getItem("themeName") || "light-theme";
  });

  useEffect(() => {
    document.documentElement.style.setProperty(
      "background-color",
      themeName === "light-theme" ? "#f4f4f4" : "#111111"
    );
    document.documentElement.style.setProperty(
      "color-scheme",
      themeName === "light-theme" ? "light" : "dark"
    );
    document.documentElement.style.setProperty(
      "transition",
      "background-color 0.2s linear, color-scheme 0.2s linear"
    );
    localStorage.setItem("themeName", themeName);
  }, [themeName]);

  const toggleTheme = () => {
    setThemeName((prevTheme) =>
      prevTheme === "light-theme" ? "dark-theme" : "light-theme"
    );
  };

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
