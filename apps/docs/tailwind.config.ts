import type { Config } from "tailwindcss";
import chalkboardConfig from "../../packages/chalkboard/tailwind.config";

const config: Config = {
  presets: [chalkboardConfig],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/chalkboard/src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
};

export default config;
