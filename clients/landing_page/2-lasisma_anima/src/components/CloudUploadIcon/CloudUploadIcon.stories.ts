import type { Meta, StoryObj } from "@storybook/react";
import { CloudUploadIcon } from ".";

const meta: Meta<typeof CloudUploadIcon> = {
  title: "Components/CloudUploadIcon",
  component: CloudUploadIcon,
};

export default meta;

type Story = StoryObj<typeof CloudUploadIcon>;

export const Default: Story = {
  args: {},
};
