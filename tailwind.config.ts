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
      screens: {
        mobilesize: {max: '900px'},
        phoneonlysize: {max: '700px'},
      },
      maxWidth: {
        "2/5": "40%",
        "3/5": "60%",
        full: "100%",
      },
      colors: {  
        // Color picking helped from coolors.co
        // Night Colors (dark-mode)
        'sky_night': { 
          DEFAULT: '#22223b', 
        }, 
        'hover_night': { 
          DEFAULT: '#7a5980', 
        }, 
        'headerlink_night': { 
          DEFAULT: '#be95c4',
        }, 
        'iconlink_night': { 
          DEFAULT: '#ddbea8',
        }, 
        'link_night': { 
          DEFAULT: '#d66853',
        },
        'subcolor_night': {
          DEFAULT: '#94a3b8'
        },

        // Day Colors (light-mode)
        'sky_day': { 
          DEFAULT: '#fefae0', 
        }, 
        'hover_day': { 
          DEFAULT: '#FBEC88', 
        }, 
        'headerlink_day': { 
          DEFAULT: '#778745',
        }, 
        'iconlink_day': { 
          DEFAULT: '#bc6c25',
        }, 
        'link_day': { 
          DEFAULT: '#d00000',
        },
        'subcolor_day': {
          DEFAULT: '#619b8a'
        },
      }
    },
  },
  plugins: [],
};
export default config;
