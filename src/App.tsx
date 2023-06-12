import useDarkMode from "@fisch0920/use-dark-mode";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as StoreProvider } from "react-redux";

import { store } from "./app-state";
import { AppRoutes } from "./Routes";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => {
  const { value } = useDarkMode(false);
  const theme = value ? darkTheme : lightTheme;

  return (
    <Router>
      <StoreProvider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <AppRoutes />
        </ThemeProvider>
      </StoreProvider>
    </Router>
  );
};

export default App;
