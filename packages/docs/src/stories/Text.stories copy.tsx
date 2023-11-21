import { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@magicos-ui/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facere sapiente earum ea est, recusandae perspiciatis et ad, nostrum nihil temporibus nulla maxime libero sint, molestiae eaque quo omnis voluptatibus?",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};
export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong Text',
        as: 'strong'
    }
};
