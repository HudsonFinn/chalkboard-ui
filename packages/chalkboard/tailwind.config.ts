import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Monaspace Radon", "system-ui", "sans-serif"],
        mono: ["Monaspace Radon", "monospace"],
      },
      colors: {
        chalkboard: {
          background: "#FFFAF6",
          foreground: "#0d1321",
          primary: "#66717e",
          success: "#83781b",
          secondary: "#8d818c",
        },
      },
      keyframes: {
        "dropdown-in": {
          "0%": { opacity: "0", transform: "translateY(-4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "dropdown-in": "dropdown-in 150ms ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
