import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "europa-bold": ["Europa-Bold", "sans-serif"],
        "europa-regular": ["Europa Regular", "sans-serif"],
        sansita: ["Sansita", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
