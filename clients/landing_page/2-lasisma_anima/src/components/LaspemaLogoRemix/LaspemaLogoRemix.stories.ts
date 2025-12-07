import type { Meta, StoryObj } from "@storybook/react";
import { LaspemaLogoRemix } from ".";

const meta: Meta<typeof LaspemaLogoRemix> = {
  title: "Components/LaspemaLogoRemix",
  component: LaspemaLogoRemix,
};

export default meta;

type Story = StoryObj<typeof LaspemaLogoRemix>;

export const Default: Story = {
  args: {
    className: {},
    hasOutermostEllipse: true,
    hasTextRing: true,
    hasMiddleEllipse: true,
    hasLagosLogo: true,
  },
};
