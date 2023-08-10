import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero_bg: "url('/hero/hero_bg.webp')",
      },
      colors: {
        "s2s-orange": "#EC9638",
        "s2s-purple": "#4640E2",
      },
    },
  },
  plugins: [],
};
export default config;
