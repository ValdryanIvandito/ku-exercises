import { useState, useCallback, useMemo } from "react";
import { ThemeContext } from "./ThemeContext";

export function ThemeProvider({ initialTheme = "light", children }) {
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = useCallback(() => {
    setTheme((theme) => {
      return theme === "light" ? "dark" : "light";
    });
  }, []);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
