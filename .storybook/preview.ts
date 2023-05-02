import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
        iphoneX: {
          name: "iPhone X",
          styles: {
            width: "375px",
            height: "812px",
          }
        }
      }
    },
    backgrounds: {
      values: [
        {
          name: "grey",
          value: "#808080",
        }
      ]
    }
  },
};

export default preview;
