import type { Meta, StoryObj } from "@storybook/react";
import { Subscribe } from ".";

const meta: Meta<typeof Subscribe> = {
  title: "Components/Subscribe",
  component: Subscribe,
};

export default meta;

type Story = StoryObj<typeof Subscribe>;

export const Default: Story = {
  args: {
    className: {},
  },
};
