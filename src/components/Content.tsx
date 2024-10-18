import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const Content = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <div className={`content ${mode}`}>
      <h1>This is {mode} mode!</h1>
      <p>Some content based on {mode} mode.</p>
    </div>
  );
};
