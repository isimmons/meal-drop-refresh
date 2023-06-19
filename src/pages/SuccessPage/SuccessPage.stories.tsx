import type { Meta, StoryObj } from '@storybook/react';

import { SuccessPage } from './SuccessPage';

const meta: Meta<typeof SuccessPage> = {
  title: 'Pages/SuccessPage',
  component: SuccessPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
