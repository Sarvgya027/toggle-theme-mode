import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const ToggleThemeButton = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      toggle = {mode === "light" ? "dark" : "light"}
    </button>
  );
};
