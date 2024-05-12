import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'airbnb': '#fc3c5c',
        'airbnb-dark': '#e1175d',
        'gray-hover': '#f0ecec'
      }
    },
  },
  plugins: [],
};
export default config;
