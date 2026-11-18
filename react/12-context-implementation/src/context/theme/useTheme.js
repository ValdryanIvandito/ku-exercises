import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export function useTheme() {
  const value = useContext(ThemeContext);

  if (value === null)
    throw new Error("useTheme must be used inside a <ThemeContext.Provider>");

  return value;
}
