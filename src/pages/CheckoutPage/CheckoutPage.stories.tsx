import type { Meta, StoryObj } from '@storybook/react';

import { CheckoutPage } from './CheckoutPage';

const meta: Meta<typeof CheckoutPage> = {
  title: 'Pages/CheckoutPage',
  component: CheckoutPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
