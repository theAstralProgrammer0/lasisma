import type { Meta, StoryObj } from "@storybook/react";
import { MaterialSymbols } from ".";

const meta: Meta<typeof MaterialSymbols> = {
  title: "Components/MaterialSymbols",
  component: MaterialSymbols,
};

export default meta;

type Story = StoryObj<typeof MaterialSymbols>;

export const Default: Story = {
  args: {},
};
