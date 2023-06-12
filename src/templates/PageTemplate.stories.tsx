import type { Meta, StoryObj } from "@storybook/react";

import { PageTemplate } from "./PageTemplate";
import { ReactNode } from "react";

import { cartItems } from "~/stub/cart-items";

const meta: Meta<typeof PageTemplate> = {
  title: "Templates/PageTemplate",
  component: PageTemplate,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

type DummyProps = {
  children: ReactNode | ReactNode[];
};

const DummyComponent = ({ children }: DummyProps) => (
  <div style={{ padding: 60 }}>{children}</div>
);

export const Default: Story = {
  args: {
    children: (
      <DummyComponent>
        Default template with scrollable header and navigation items + Footer
      </DummyComponent>
    ),
  },
};

export const WithItemsInTheCart: Story = {
  parameters: {
    store: {
      initialState: { cart: { items: cartItems } },
    },
  },
};

export const Basic: Story = {
  args: {
    type: "basic",
    children: (
      <DummyComponent>
        Simple template with scrollable header and no navigation amd no footer
      </DummyComponent>
    ),
  },
};

export const StickyHeader: Story = {
  args: {
    type: "sticky-header",
    children: (
      <DummyComponent>
        Template with sticky header on desktop and navigation items. Try
        scrolling!
      </DummyComponent>
    ),
  },
};
