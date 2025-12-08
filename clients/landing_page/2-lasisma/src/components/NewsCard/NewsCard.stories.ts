import type { Meta, StoryObj } from "@storybook/react";
import { NewsCard } from ".";

const meta: Meta<typeof NewsCard> = {
  title: "Components/NewsCard",
  component: NewsCard,
};

export default meta;

type Story = StoryObj<typeof NewsCard>;

export const Default: Story = {
  args: {
    className: {},
    imageClassName: {},
  },
};
