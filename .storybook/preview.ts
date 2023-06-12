import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { viewports as breakpoints } from "../src/styles/breakpoints";
import { globalDecorators } from "./decorators";
import { initialize as mswInit, mswLoader } from "msw-storybook-addon";

import type { Preview } from "@storybook/react";

mswInit({ onUnhandledRequest: "bypass" });

// Create custom viewports using widths defined in design tokens
const breakpointViewports = Object.keys(breakpoints).reduce((acc, key) => {
  acc[`breakpoint${key}`] = {
    name: `Breakpoint - ${key}`,
    styles: {
      width: `${breakpoints[key as keyof typeof breakpoints]}px`,
      // Account for padding and border around viewport preview
      height: "calc(100% - 20px)",
    },
    type: "other",
  };
  return acc;
}, {} as typeof INITIAL_VIEWPORTS);

const preview: Preview = {
  decorators: globalDecorators,
  loaders: [mswLoader],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    viewport: {
      viewports: {
        ...breakpointViewports,
        ...INITIAL_VIEWPORTS,
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
