import { Content } from "./components/Content";
import "./styles.css";
import { ToggleThemeButton } from "./components/ToggleThemeButton";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ToggleThemeButton />
        <Content />
      </div>
    </ThemeProvider>
  );
}
