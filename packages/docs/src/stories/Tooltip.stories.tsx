import { StoryObj, Meta } from "@storybook/react";
import { Tooltip, TooltipProps } from "@magicos-ui/react";

export default {
  title: "Data display/Tooltip",
  component: Tooltip,
  argTypes: {
    side: {
      options: ["top", "right", "bottom", "left"],
      control: { type: "radio" },
    },
    align: {
      options: ["start", "center", "end"],
      control: { type: "radio" },
    },
  },
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {
  args: {
    text: "Tooltip text",
    side: "top",
    align: "center",
  },
};
