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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      mobilesize: {max: '900px'},
      phoneonlysize: {max: '700px'},
    },
    maxWidth: {
      "2/5": "40%",
      "3/5": "60%",
      full: "100%",
    }
  },
  plugins: [],
};
export default config;
