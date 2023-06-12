import type { Meta, StoryObj } from "@storybook/react";

import { HomePage } from "./HomePage";
import { rest } from "msw";
import { BASE_URL } from "~/api";
import { restaurants } from "~/stub/restaurants";

const meta: Meta<typeof HomePage> = {
  title: "Pages/HomePage",
  component: HomePage,
  parameters: {
    layout: "fullscreen",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=135-258&t=l3vzhZ8lDrBg1pXG-4",
    },
    msw: {
      handlers: [
        rest.get(BASE_URL, (_req, res, ctx) => res(ctx.json(restaurants))),
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
