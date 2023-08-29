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
        mobile_menu_bg: "url('/img/misc/mobile_menu_bg.webp')",
        footer_bg: "url('/img/footer/footer_bg.webp')",
      },
      aspectRatio: {
        "3/2": "3 / 2",
      },
      colors: {
        "s2s-orange": "#EC9638",
        "s2s-purple": "#4640E2",
        "footer-gray": "#DEDEDE",
        "s2s-gray": "#7C7C7C",
        "menu-gray": "#1e1e1e",
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/forms")({ strategy: "class" }),
    require("@tailwindcss/typography"),
  ],
};
export default config;
