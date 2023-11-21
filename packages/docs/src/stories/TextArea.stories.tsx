import { StoryObj, Meta } from "@storybook/react";
import { Box, Text, TextArea, TextAreaProps} from "@magicos-ui/react";

export default {
  title: "Form/Text TextArea",
  component: TextArea,
  args: {},
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$2",
        }}
      >
        <Text size="sm">Observations</Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: "Type any observations...",
  },
};

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
};
