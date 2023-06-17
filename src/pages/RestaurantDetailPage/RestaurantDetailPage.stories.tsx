import type { Decorator, Meta, StoryObj } from '@storybook/react';
import { rest } from 'msw';

import { RestaurantDetailPage } from './RestaurantDetailPage';

import { BASE_URL } from '~/api';
import { restaurants } from '~/stub/restaurants';

const insertPortalDiv: Decorator = (Story) => {
  return (
    <>
      <Story />
      <div id="modal" />
    </>
  );
};

const meta: Meta<typeof RestaurantDetailPage> = {
  title: 'Pages/RestaurantDetailPage',
  component: RestaurantDetailPage,
  decorators: [insertPortalDiv],
  parameters: {
    layout: 'fullscreen',
    deepLink: {
      path: '/restaurants/:id',
      route: '/restaurants/1',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/proto/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?page-id=135%3A257&type=design&node-id=169-510&viewport=-1250%2C1021%2C0.5&scaling=min-zoom&starting-point-node-id=135%3A258',
    },
    msw: [
      rest.get(BASE_URL, (_req, res, ctx) => {
        return res(ctx.json(restaurants[0]));
      }),
    ],
  },
};

export const Loading: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=2152%3A3158',
    },
    msw: {
      handlers: [
        rest.get(BASE_URL, (_req, res, ctx) => {
          return res(ctx.delay('infinite'));
        }),
      ],
    },
  },
};
