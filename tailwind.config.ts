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
        hero_bg: "url('/img/hero/hero_bg.webp')",
        hub_bg: "url('/img/misc/hub_bg.webp')",
        footer_bg: "url('/img/footer/footer_bg.webp')",
      },
      colors: {
        "s2s-orange": "#EC9638",
        "s2s-purple": "#4640E2",
        "footer-gray": "#DEDEDE",
        "s2s-gray": "#7C7C7C",
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")],
};
export default config;
