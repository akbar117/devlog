import Terminal from "vite-plugin-terminal";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/devlog/",

  plugins: [
    Terminal({
      console: "terminal",
      output: ["terminal", "console"],
    }),
  ],
});
