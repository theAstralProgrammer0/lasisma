import type { Meta, StoryObj } from "@storybook/react";
import { LasgStrip } from ".";

const meta: Meta<typeof LasgStrip> = {
  title: "Components/LasgStrip",
  component: LasgStrip,
};

export default meta;

type Story = StoryObj<typeof LasgStrip>;

export const Default: Story = {
  args: {
    className: {},
  },
};
