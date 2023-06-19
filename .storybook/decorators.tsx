import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { configureStore } from '@reduxjs/toolkit';
import { Provider as StoreProvider } from 'react-redux';

import { rootReducer } from '../src/app-state';
import { Decorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/styles/GlobalStyle';
import { lightTheme, darkTheme } from '../src/styles/theme';

const withTheme: Decorator = (StoryFn, context) => {
  const theme = context.parameters.theme || context.globals.theme;
  const storyTheme = theme === 'dark' ? darkTheme : lightTheme;
  return (
    <>
      <ThemeProvider theme={storyTheme}>
        <GlobalStyle />
        <StoryFn />
      </ThemeProvider>
    </>
  );
};

const withStore: Decorator = (StoryFn, { parameters }) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: parameters.store?.initialState,
  });
  return (
    <StoreProvider store={store}>
      <StoryFn />
    </StoreProvider>
  );
};

export const globalDecorators = [withStore, withRouter, withTheme];
