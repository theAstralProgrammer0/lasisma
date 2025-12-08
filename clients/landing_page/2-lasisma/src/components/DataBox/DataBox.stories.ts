import type { Meta, StoryObj } from "@storybook/react";
import { DataBox } from ".";

const meta: Meta<typeof DataBox> = {
  title: "Components/DataBox",
  component: DataBox,
};

export default meta;

type Story = StoryObj<typeof DataBox>;

export const Default: Story = {
  args: {
    className: {},
  },
};
