import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { RestaurantCard } from './RestaurantCard';

import { restaurants } from '~/stub/restaurants';

const meta = {
  title: 'Components/RestaurantCard',
  component: RestaurantCard,
  args: {
    ...restaurants[0],
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1126-3893&t=WB28EG6Y9TrKtViI-4',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RestaurantCard>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    userEvent.click(canvas.getByTestId('restaurant-card'));
    expect(args.onClick).toHaveBeenCalled();
  },
};

export const New: Story = {
  args: {
    isNew: true,
  },
};
export const Closed: Story = {
  args: {
    isClosed: true,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    userEvent.click(canvas.getByTestId('restaurant-card'));
    expect(args.onClick).not.toHaveBeenCalled();
  },
};
export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export default meta;
