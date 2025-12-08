import type { Meta, StoryObj } from "@storybook/react";
import { UisArrowUpRight } from ".";

const meta: Meta<typeof UisArrowUpRight> = {
  title: "Components/UisArrowUpRight",
  component: UisArrowUpRight,
};

export default meta;

type Story = StoryObj<typeof UisArrowUpRight>;

export const Default: Story = {
  args: {},
};
