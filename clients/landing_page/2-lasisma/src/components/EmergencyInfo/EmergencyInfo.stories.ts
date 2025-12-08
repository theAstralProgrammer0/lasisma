import type { Meta, StoryObj } from "@storybook/react";
import { EmergencyInfo } from ".";

const meta: Meta<typeof EmergencyInfo> = {
  title: "Components/EmergencyInfo",
  component: EmergencyInfo,
};

export default meta;

type Story = StoryObj<typeof EmergencyInfo>;

export const Default: Story = {
  args: {
    className: {},
  },
};
