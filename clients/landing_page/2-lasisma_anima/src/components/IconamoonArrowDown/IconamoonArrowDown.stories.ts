import type { Meta, StoryObj } from "@storybook/react";
import { IconamoonArrowDown } from ".";

const meta: Meta<typeof IconamoonArrowDown> = {
  title: "Components/IconamoonArrowDown",
  component: IconamoonArrowDown,
};

export default meta;

type Story = StoryObj<typeof IconamoonArrowDown>;

export const Default: Story = {
  args: {},
};
