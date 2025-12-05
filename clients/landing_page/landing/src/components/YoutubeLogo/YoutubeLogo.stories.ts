import type { Meta, StoryObj } from "@storybook/react";
import { YoutubeLogo } from ".";

const meta: Meta<typeof YoutubeLogo> = {
  title: "Components/YoutubeLogo",
  component: YoutubeLogo,
};

export default meta;

type Story = StoryObj<typeof YoutubeLogo>;

export const Default: Story = {
  args: {
    className: {},
    vectorClassName: {},
    vector: "/img/vector.png",
    vectorClassNameOverride: {},
    img: "/img/vector.png",
  },
};
