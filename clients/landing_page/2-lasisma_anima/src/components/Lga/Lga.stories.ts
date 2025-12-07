import type { Meta, StoryObj } from "@storybook/react";
import { Lga } from ".";

const meta: Meta<typeof Lga> = {
  title: "Components/Lga",
  component: Lga,
};

export default meta;

type Story = StoryObj<typeof Lga>;

export const Default: Story = {
  args: {
    className: {},
    innerLayoutClassName: {},
    nameClassName: {},
    text: "APAPA IGANMU",
    divClassName: {},
    text1: "LCDA",
    typeClassName: {},
  },
};
