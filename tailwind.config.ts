import type { Config } from "tailwindcss";
import scrollbarHide from 'tailwind-scrollbar-hide';
import scrollbar from 'tailwind-scrollbar';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    scrollbarHide,
    scrollbar,
  ],
};

export default config;