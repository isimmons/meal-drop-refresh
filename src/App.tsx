import { useDarkMode } from 'usehooks-ts';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';

import { store } from './app-state';
import { AppRoutes } from './Routes';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';

const App = () => {
  const { isDarkMode } = useDarkMode(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

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
