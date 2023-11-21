import { StoryObj, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "@magicos-ui/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/patrickfreitasdev.png",
    alt: 'Patrick Freitas'
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined
    }
};
