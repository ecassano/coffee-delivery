import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import "./App.css";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>Coffee Shop</h1>
    </ThemeProvider>
  );
}

export default App;
