import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
  staticDirs: ["../public"],
  stories: [
    "../src/docs/Introduction.mdx",
    "../src/docs/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-designs",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
};

export default config;
