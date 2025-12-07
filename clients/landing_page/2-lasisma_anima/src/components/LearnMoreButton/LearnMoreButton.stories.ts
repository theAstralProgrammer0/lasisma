import type { Meta, StoryObj } from "@storybook/react";
import { LearnMoreButton } from ".";

const meta: Meta<typeof LearnMoreButton> = {
  title: "Components/LearnMoreButton",
  component: LearnMoreButton,
};

export default meta;

type Story = StoryObj<typeof LearnMoreButton>;

export const Default: Story = {
  args: {
    className: {},
  },
};
