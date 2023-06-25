import { navigate } from '@storybook/addon-links';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';

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

const withCheckoutEvent = (Story: StoryFn) => {
  const handleCheckout = (event: Event) => {
    const button = event.target as HTMLButtonElement;
    if (button.id === 'checkout-submit') {
      navigate({ kind: 'Pages/SuccessPage' });
    }
  };

  const canvas = document.getElementById('storybook-root');

  canvas?.addEventListener('click', handleCheckout);

  return <Story />;
};

export const Default: Story = {
  decorators: [withCheckoutEvent],
};
