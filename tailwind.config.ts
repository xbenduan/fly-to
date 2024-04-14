import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import { addDynamicIconSelectors } from "@iconify/tailwind";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [daisyui, addDynamicIconSelectors()],
  daisyui: {
    // themes: ["cupcake", "forest"],
  },
};

export default config;
