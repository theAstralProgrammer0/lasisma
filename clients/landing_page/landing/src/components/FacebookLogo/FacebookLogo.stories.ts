import type { Meta, StoryObj } from "@storybook/react";
import { FacebookLogo } from ".";

const meta: Meta<typeof FacebookLogo> = {
  title: "Components/FacebookLogo",
  component: FacebookLogo,
};

export default meta;

type Story = StoryObj<typeof FacebookLogo>;

export const Default: Story = {
  args: {
    facebookLogoClassName: {},
    facebookLogo: "/img/vector.png",
  },
};
