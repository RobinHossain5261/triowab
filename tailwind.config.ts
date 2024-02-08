import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
      xxxl: "1600px",
      "4xl": "1800px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        p1: "#693FEC",
        p2: "#7C6AF5",
        p3: "#00CFD5",
        p4: "#0061F2",
        p5: "#EC3F69",
        p6: "#2B9943",
        g500: "# 8F9BBA",
        g600: "#A3AED0",
        g900: "#1B2559",
      },
    },
  },

  plugins: [require("daisyui")],
};
export default config;
