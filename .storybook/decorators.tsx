import React from "react";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider as StoreProvider } from "react-redux";
// import { initialize as mswInit, mswDecorator } from "msw-storybook-addon";

import { rootReducer } from "../src/app-state";
import { Decorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/styles/GlobalStyle";
import { lightTheme, darkTheme } from "../src/styles/theme";

// mswInit();

const withRouter: Decorator = (StoryFn, { parameters: { deepLink } }) => {
  if (!deepLink) {
    return (
      <BrowserRouter>
        <StoryFn />
      </BrowserRouter>
    );
  }

  const { path, route } = deepLink;
  return (
    <MemoryRouter initialEntries={[encodeURI(route)]}>
      <Routes>
        <Route path={path} element={<StoryFn />} />
      </Routes>
    </MemoryRouter>
  );
};

const withTheme: Decorator = (StoryFn, context) => {
  const theme = context.parameters.theme || context.globals.theme;
  const storyTheme = theme === "dark" ? darkTheme : lightTheme;
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
