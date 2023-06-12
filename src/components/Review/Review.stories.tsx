import { Meta, StoryObj } from "@storybook/react";

import { Review } from "./Review";

const meta: Meta<typeof Review> = {
  title: "Components/Review",
  component: Review,
  argTypes: {
    rating: {
      control: {
        type: "range",
        min: 0,
        max: 5,
        step: 1,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Excellent: Story = {};
Excellent.args = {
  rating: 5,
};

export const VeryGood: Story = {};
VeryGood.args = {
  rating: 4.3,
};

export const Adequate: Story = {};
Adequate.args = {
  rating: 2.5,
};

export const VeryPoor: Story = {};
VeryPoor.args = {
  rating: 1,
};
