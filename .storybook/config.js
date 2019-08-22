import { configure, addDecorator, addParameters } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withThemes } from "storybook-addon-themes";

import "../src/styles/index.scss";
import "./storybook.scss";

// Automatically import all files ending with *.stories.tsx
const req = require.context("../src", true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Enable a11y addon
addDecorator(withA11y);

// Define UI themes
addParameters({
  themes: [
    {
      name: "Default",
      color: "#f5f7fb",
      class: ["theme-wrapper", "theme-default"],
      default: true
    },
    { name: "Dark", color: "#1c1c1c", class: ["theme-wrapper", "theme-dark"] }
  ]
});

addDecorator(withThemes);

configure(loadStories, module);