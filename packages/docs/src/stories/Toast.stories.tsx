import { StoryObj, Meta } from "@storybook/react";
import { Toast, ToastProps } from "@magicos-ui/react";

export default {
  title: "Data display/Toast",
  component: Toast,
  argTypes: {
    duration: {
      control: { type: "number" },
    },
  },
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {
  args: {
    title: "Agendamento realizado",
    description: "Quarta-feira, 23 de Outubro às 16h",
    duration: 3000,
  },
};
