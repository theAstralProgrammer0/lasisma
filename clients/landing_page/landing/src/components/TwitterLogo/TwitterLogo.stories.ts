import type { Meta, StoryObj } from "@storybook/react";
import { TwitterLogo } from ".";

const meta: Meta<typeof TwitterLogo> = {
  title: "Components/TwitterLogo",
  component: TwitterLogo,
};

export default meta;

type Story = StoryObj<typeof TwitterLogo>;

export const Default: Story = {
  args: {
    twitterLogoClassName: {},
    twitterLogo: "/img/vector.png",
  },
};
