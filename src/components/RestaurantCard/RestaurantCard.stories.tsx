import type { Meta, StoryObj } from "@storybook/react";
import { restaurants } from "~/stub/restaurants";
import { RestaurantCard } from "./RestaurantCard";

const meta = {
  title: "Components/RestaurantCard",
  component: RestaurantCard,
  args: {
    ...restaurants[0],
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1126-3893&t=WB28EG6Y9TrKtViI-4",
    },
  },
} satisfies Meta<typeof RestaurantCard>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const New: Story = {
  args: {
    isNew: true,
  },
};
export const Closed: Story = {
  args: {
    isClosed: true,
  },
};
export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export default meta;
