/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "i3ifi4",

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
