import { themes } from '@storybook/theming';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  docs: {
    container: (props) => {
         const isDark = useDarkMode();
         const currentProps = { ...props };
         currentProps.theme = isDark ? themes.dark : themes.light;
         return React.createElement(DocsContainer, currentProps);
    },
},
};

export default preview;
