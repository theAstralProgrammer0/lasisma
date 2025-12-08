import type { Meta, StoryObj } from "@storybook/react";
import { ReportForm } from ".";

const meta: Meta<typeof ReportForm> = {
  title: "Components/ReportForm",
  component: ReportForm,
};

export default meta;

type Story = StoryObj<typeof ReportForm>;

export const Default: Story = {
  args: {
    className: {},
    inputType: "text",
    inputType1: "text",
    inputType2: "email",
  },
};
