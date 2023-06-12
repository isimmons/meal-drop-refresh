import type { Meta, StoryObj } from "@storybook/react";
import { rest } from "msw";
import { BASE_URL } from "~/api";
import { RestaurantsSection } from "./RestaurantsSection";

import { restaurants } from "~/stub/restaurants";

const meta: Meta<typeof RestaurantsSection> = {
  title: "Pages/HomePage/Components/RestaurantsSection",
  component: RestaurantsSection,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=135-311&t=QGU1YHR0aYc88VDn-4",
    },
  },
  args: {
    title: "Our Favorite Picks",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default Story",
  parameters: {
    msw: {
      handlers: [
        rest.get(BASE_URL, (_req, res, ctx) => res(ctx.json(restaurants))),
      ],
    },
  },
};

export const Loading: Story = {
  name: "Loading Story",
  parameters: {
    msw: {
      handlers: [
        rest.get(BASE_URL, (_req, res, ctx) => res(ctx.delay("infinite"))),
      ],
    },
  },
};
